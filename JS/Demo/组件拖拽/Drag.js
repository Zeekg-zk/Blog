window.onload = function () {
  const el = document.getElementById('drag')
  el.onmousedown = function (e) {
    let diffX = e.clientX - el.offsetLeft
    let diffY = e.clientY - el.offsetTop

    document.onmousemove = function (e) {
      let left = e.clientX - diffX
      let top = e.clientY - diffY

      if (top < 0) {
        top = 0
      } else if (top > window.innerHeight - el.offsetHeight) {
        top = window.innerHeight - el.offsetHeight
      }

      if(left < 0) {
        left = 0
      } else if(left > window.innerWidth - el.offsetWidth) {
        left = window.innerWidth - el.offsetWidth
      }

      el.style.left = left + 'px'
      el.style.top = top + 'px'
    }

    document.onmouseup = function (e) {
      this.onmousemove = null
      this.onmouseup = null

    }
  }
}