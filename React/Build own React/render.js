function render(element, container) {
  // 需要判断是否为文本节点
  const dom = element.type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(element.type)

  const isProperty = key => key !== "children"
  // 为节点分配元素属性 props
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })

  // 递归地对每个孩子执行相同的操作
  element.props.children.forEach(child =>
    render(child, dom))

  container.appendChild(dom)
}

export default render;
