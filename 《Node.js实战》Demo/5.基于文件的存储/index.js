const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)
const command = args.shift()
const taskDescription = args.join(' ')
const file = path.join(process.cwd(), '/.tasks')

switch (command) {
  case 'list':
    listTasks(file)
    break;
  case 'add':
    addTask(file, taskDescription)
    break;
  default:
    console.log(`Usage: node index.js list|add [taskDescription]`);
}

/**
 * 用来获取已有的任务，loadOrInitializeTaskArray会从一个文本文件中加载编码为JSON格式的数据。
 * @param {*} file 
 * @param {*} cb 回调函数
 */
function loadOrInitializeTaskArray(file, cb) {
  // 用access查看文件是否存在
  // fs.constants.F_OK：指示文件对调用进程可见的标志。 这对于确定文件是否存在很有用，但没有说明 rwx 权限。 未指定模式时的默认值。
  fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
      cb([]) // 如果不存在就回调空数组
      console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
      return;
    } else {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        data = data.toString()
        let tasks = JSON.parse(data || '[]')
        cb(tasks)
      })
    }
  });
}

function listTasks(file) {
  // 此时函数的作用是：读 file 中的数据并将其显示出来
  loadOrInitializeTaskArray(file, tasks => {
    for(let i in tasks) {
      console.log(tasks[i]);
    }
  })
}

/**
 * 把任务用JSON串行化后放到文件中
 * @param {*} file 
 * @param {*} tasks 
 */
function storeTasks(file, tasks) {
  fs.writeFile(file, JSON.stringify(tasks), 'utf8', err => {
    if(err) throw err;
    console.log('Saved!');
  })
}

function addTask(file, taskDescription) {
  // 此时函数的作用是：读出 file 中的数据并将 taskDescription 添加到其中
  loadOrInitializeTaskArray(file, tasks => {
    tasks.push(taskDescription)
    storeTasks(file, tasks)
  })
}