function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}

const element = createElement(
  "div",
  { id: "foo" },
  createElement("a", null, "bar"),
  createElement("b")
)

console.log(JSON.stringify(element, null, 2));
/**
 * 
 * 输出内容：
{
  "type": "div",
    "props": {
    "id": "foo",
      "children": [
        {
          "type": "a",
          "props": {
            "children": [
              "bar"
            ]
          }
        },
        {
          "type": "b",
          "props": {
            "children": []
          }
        }
      ]
  }
}
 */

