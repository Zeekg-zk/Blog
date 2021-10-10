## HTML 结构

```html
<div id="fullpage">
  <div class="page">
    <span>Page 111</span>
  </div>
  <div class="page">
    <span>Page 222</span>
  </div>
  <div class="page">
    <span>Page 333</span>
  </div>
</div>
```

## CSS 初始化

```css
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#fullpage {
  position: relative;
  top: 0;
  transition: all 1000ms ease;
}

.page {
  width: 100%;
  height: 100%;
}
```

## 构造 FullPage

```js
class FullPage {
  constructor(options) {
    // 默认配置
    const defalutOptions = {
      el: "fullpage",
      delay: 1000,
      defineAnimation: () => {},
    };
    // 合并配置信息
    this.options = Object.assign(defalutOptions, options);
    // 获取当前视图容器
    this.container = document.querySelector(`#${el}`);
    // 获取当前视图高度
    this.viewHeight = document.documentElement.clientHeight;
    // 当前显示的第几个
    this.currentIndex = 0;
    // 当前的位置
    this.currentPosition = 0;
    // 自定义的显示动画函数
    this.options.defineAnimation = this.options.defineAnimation.bind(this);
    // 滚动的页面元素 以及 页面个数
    this.pages = document.querySelectorAll(".page");
    this.pageNum = this.pages.length;

    this.init();
  }
}
```

上面也看到了还需要 `init()` 来完成初始化

```js
  init() {
    this.container.style.height = `${this.viewHeight}px`
  }
```

首先需要给当前视口元素一个高度，这个高度就是 this.viewHeight。

同时，也需要监听鼠标滚动事件`document.addEventListener('mousewheel', this.scrollMouse.bind(this))`

接下来就需要写上滚动后所产生的影响

```js
  /**
   * 跳到指定位置
   * @param {Number} position
   */
  toPosition(position) {
    this.container.style.top = `${position}px`
  }

  // 向上滚动一次
  goUp() {
    if (-this.container.offsetTop >= this.viewHeight) {
      this.currentPosition = this.currentPosition + this.viewHeight;
      this.toPosition(this.currentPosition)
      // 改变当前显示的下标
      this.currentIndex = Math.abs(this.currentPosition / this.viewHeight)
      this.options.defineAnimation()
    }
  }

  // 向下滚动一次
  goDown() {
    if (-this.container.offsetTop <= (this.viewHeight * (this.pageNum - 2))) {
      this.currentPosition = this.currentPosition - this.viewHeight;
      this.toPosition(this.currentPosition)
      // 改变当前显示的下标
      this.currentIndex = Math.abs(this.currentPosition / this.viewHeight)
      this.options.defineAnimation()
    }
  }

  scrollMouse(event) {
    const delta = utils.getWheelDelta(event)
    if (delta > 0) {
      this.goUp()
    } else {
      this.goDown()
    }
  }

```

这里的 `utils` 自己定义一些方法：

```js
const utils = {
  getWheelDelta: function (event) {
    return event.wheelDelta;
  },
};
```

但是这样不仅会耗费一些性能，而且一次性滚动太多也会出现一些意想不到的情况。
这种情况就需要一个节流函数

```js
const utils = {
  // o code
  throttle: function (method, content, delay) {
    let flag = false;
    return function (...args) {
      if (flag) return;
      method.apply(content, args);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, delay);
    };
  },
};
```

现在 `init()` 函数就是下面这个样子

```js
  init() {
    this.container.style.height = `${this.viewHeight}px`

    const handleScrollMouse = utils.throttle(this.scrollMouse, this, this.options.delay)
    document.addEventListener('mousewheel', handleScrollMouse)
  }
```

现在表面上功能是都有了，在 html 文件上初始化。

```html
<script>
  new FullPage({
    defineAnimation: function () {
      document.querySelector(".fade-in").classList.remove("fade-in");
      this.pages[this.currentIndex]
        .querySelector("span")
        .classList.add("fade-in");
    },
  });
  document.querySelector("span").classList.add("fade-in");
</script>
```

现在查看效果貌似是可以了，但是如果浏览器大小改变就又会出现问题

## 监听浏览器大小变化

```js
  // 浏览器大小改变
  windowResize() {
    this.viewHeight = document.documentElement.clientHeight
    this.container.style.height = `${this.viewHeight}px`

    this.currentPosition = Math.abs(this.currentIndex * this.viewHeight)
    this.toPosition(this.currentPosition)
  }
```

并且添加到 `init()` 函数中

```js
 init() {
    // other code
    window.addEventListener('resize', this.windowResize.bind(this))
  }
```

这里注意是要监听 `window` 中的 `resize`

但是这样拖动大小改变，频繁调用此函数，也会引起性能上的损耗。所以可以添加上防抖函数。

```js
const utils = {
  // other code
  debounce: function (method, content, delay) {
    let timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        method.apply(content);
      }, delay);
    };
  },
};
```

在 `init()` 函数中使用

```js
  init() {
    // other code
    const handleWindowResize = utils.debounce(this.windowResize, this, 100)
    window.addEventListener('resize', handleWindowResize.bind(this))
  }
```

现在查看效果貌似可以了，的确可以了，但是不能只是一个浏览器可以，可以发现，在火狐浏览器还是不能正常显示的，所以只能再去兼容火狐浏览器。

添加的地方也不多

```js
const utils = {
  getWheelDelta: function (event) {
    if (event.wheelDelta) {
      this.getWheelDelta = (event) => event.wheelDelta;
      return event.wheelDelta;
    } else {
      this.getWheelDelta = (event) => -event.detail;
      return -event.detail;
    }
  },
  // other code
};
```

```js
  init() {
    // other code
    const handleScrollMouse = utils.throttle(this.scrollMouse, this, this.options.delay)

    if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
      document.addEventListener('DOMMouseScroll', handleScrollMouse)
    } else {
      document.addEventListener('mousewheel', handleScrollMouse)
    }
    // other code
  }
```
