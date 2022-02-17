/**
 * 创建 React 元素
 * @param {*} type 元素类型
 * @param {*} props 元素属性
 * @param  {...any} children 元素子数组（子节点）
 * @returns Element 的 Object 对象
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
 * 创建一个只有文本的元素
 */
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [] // 只有文本元素是没有子节点的
    }
  }
}


export default createElement;
