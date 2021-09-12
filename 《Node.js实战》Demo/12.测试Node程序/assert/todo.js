class Todo {

  todos = []

  add(item) {
    if (!item) throw new Error("Todo add require an item")
    this.todos.push(item)
  }

  deleteAll() {
    this.todos = []
  }

  getCount() {
    return this.todos.length
  }

  doAsync(callback) {
    setTimeout(callback,2000, true)
  } 
}

module.exports = Todo