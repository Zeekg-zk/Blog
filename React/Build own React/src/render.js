function createDom(fiber) {
  const dom = fiber.type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(fiber.type);

  // 为节点分配元素道具
  const isProperty = key => key !== "children";
  Object.keys(fiber.type)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = fiber.props[name]
    })

  // 添加事件监听器
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2)
      dom.addEventListener(eventType, nextProps[name])
    })

  return dom;
}
/* ---------------- Reconciliation start ------------------ */
function commitRoot() {
  deletions.forEach(commitWork)
  // add nodes to dom
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}

const isEvent = key => key.startsWith("on");
const isProperty = key => key !== "children" && !isEvent(key);
const isNew = (prev, next) => key => prev[key] !== next[key];
const isGone = (prev, next) => key => !(key in next);
function updateDom(dom, prevProps, nextProps) {
  // 移除旧的或改变的事件监听器
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(
      key => !(key in nextProps) || isNew(prevProps, nextProps)(key)
    )
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2)
      dom.removeEventListener(eventType, prevProps[name])
    })

  // 移除旧的属性
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => {
      dom[name] = ""
    })

  // 设置新的或改变属性
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      dom[name] = nextProps[name]
    })
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  // 首先找到 DOM 节点的父节点，沿着光纤树查找，直到找到一个具有 DOM 节点的光纤
  let domParentFiber = fiber.parent
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent
  }
  const domParent = domParentFiber.dom
  // 处理新的 effectTags
  if (fiber.effectTags === "PLACEMENT" && fiber.dom !== null) {
    // 附加到父fiber的节点
    domParent.appendChild(fiber.dom)
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    // 更新现有的 DOM 节点
    updateDom(fiber.dom, fiber.alternate.props, fiber.props)
  } else if (fiber.effectTag === "DELETION") { // 删除
    commitDeletion(fiber, domParent)
  }
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

// 当移除一个节点时，还需继续移动，直到找到一个具有 DOM 节点的子节点
function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom)
  } else {
    commitDeletion(fiber.child, domParent)
  }
}
/* ---------------- Reconciliation end ------------------ */

/**
 * 仿写 ReactDOM 中的 render 函数
 * @param {*} element React 元素
 * @param {*} container DOM 元素
 */
function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    },
    alternate: currentRoot, // 与旧 fiber 的链接
  }
  deletions = []
  // 这里的 nextUnitOfWork 为 fiber 的根(root)
  nextUnitOfWork = wipRoot

  container.appendChild(dom);
}

/* 把工作分解成小单元，在完成每个单元之后，如果还有其他需要完成的事情，我们将让浏览器中断渲染。 */
let nextUnitOfWork = null
let currentRoot = null // “向 DOM 提交的最后一个光纤树”的引用
let wipRoot = null
let deletions = null // 这个数组用来跟踪想要删除的节点

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
}

// 将在浏览器*主线程*空闲的时候调用（React不再使用此函数，它使用了调度程序包）
requestIdleCallback(workLoop)

// 此函数不仅执行工作，还返回下一个工作单元
function performUnitOfWork(fiber) {
  // 检查光纤类型是否是一个函数，并根据这个检查另一个更新函数
  const isFunctionComponent = fiber.type instanceof Function
  if (isFunctionComponent) {
    updateFunctionComponent(fiber)
  } else {
    updateHostComponent(fiber)
  }

  // return next unit of work
  // 下个工作单元：fiber 优先子节点，若没有子节点就找兄弟节点
  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

let wipFiber = null
let hookIndex = null

// 运行函数（钩子函数）来获取子元素
function updateFunctionComponent(fiber) {
  wipFiber = fiber
  hookIndex = 0
  wipFiber.hooks = []
  const children = [fiber.type(fiber.props)]
  reconcileChildren(fiber, children)
}

function useState(initial) {
  // 检查是否有旧的钩子
  const oldHook = wipFiber.alternate && wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex]
  // 如果有一个旧的钩子，将状态从旧的钩子复制到新的钩子
  // 如果没有，就初始化状态
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  }

  // 在下一次呈现组件的时候这样做，我们从旧的钩子队列中获得所有的操作，
  // 然后将它们一个一个地应用到新的钩子状态，这样当我们返回状态时，它就被更新了
  const actions = oldHook ? oldHook.queue : []
  actions.forEach(action => {
    hook.state = action(hook.state)
  })

  const setState = action => {
    hook.queue.push(action)
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    }
    nextUnitOfWork = wipRoot
    deletions = []
  }

  wipFiber.hooks.push(hook)
  hookIndex++
  return [hook.state, setState]
}

// 创建一个新节点并将其附加到 DOM
function updateHostComponent(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }
  reconcileChildren(fiber, fiber.props.children)
}

// 在这里调和旧纤维与新元素
function reconcileChildren(wipFiber, elements) {
  // 为每个 child 创建一个新的 fiber
  let index = 0
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child
  let prevSibling = null

  while (index < elements.length || oldFiber !== null) {
    const element = elements[index]
    let newFiber = null

    // compare oldFiber to element
    const sameType = oldFiber && element && element.type === oldFiber.type

    if (sameType) {
      // 如果旧的fiber和新的元素具有相同的类型，那么我们可以保留 DOM 节点，只用新的道具来更新它
      // update the node
      newFiber = {
        type: oldFiber.type,
        props: element.props, // 只需更新属性
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE",
      }
    }

    if (element && !sameType) {
      // 如果类型不同，并且有一个新元素，这意味着我们需要创建一个新的 DOM 节点
      // add this node
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT",
      }
    }

    if (oldFiber && !sameType) {
      // 如果类型不同，有一个旧的纤维，我们需要移除旧的节点
      // delete the oldFiber's node
      oldFiber.effectTag = "DELETION"
      deletions.push(oldFiber)
    }

    // 把它添加到 fiber tree 中
    // 根据它是不是第一个节点而决定是 child 或者是 sibling
    if (index === 0) {
      wipFiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }

    prevSibling = newFiber
    index++
  }
}

export default render;