import createElement from './createElement.js'
import render from './render.js'

// Didact 说教者
const Didact = {
  createElement,
  render
}

const element = Didact.createElement(
  "div",
  { id: "foo" },
  Didact.createElement("a", null, "bar"),
  Didact.createElement("b")
)
console.log(JSON.stringify(element, null, 2));


/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
const container = document.getElementById("root")
Didact.render(element, container)
