/**
 * 创建 React 元素
 * @param {*} type 节点类型
 * @param {*} props 节点属性
 * @param  {...any} children 节点的子节点
 * @returns 
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object'
          ? child
          : createTextElement(child)
      )
    }
  }
}

/**
 * 创建文本节点
 */
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}

export default createElement;