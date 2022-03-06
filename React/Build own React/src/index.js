import createElement from "./createElement"
import render from "./render"

/**
 * 作为类似 React 一样的库
 */
const Didact = {
  createElement,
  render
}

/** @jsx Didact.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
);

const container = document.getElementById("root")
Didact.render(element, container)