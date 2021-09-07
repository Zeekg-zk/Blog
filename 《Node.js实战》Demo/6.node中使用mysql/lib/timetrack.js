const qs = require('querystring');

// 发送 html 响应
exports.sendHtml = function (res, html) {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
}

// 解析 HTTP POST 数据
exports.parseReceivedData = (req, callback) => {
  let body = ''
  // req.setEncoding('utf8');
  req.on('data', chunk => {
    console.log(chunk);
    body += chunk;
  })
  req.on('end', () => {
    let data = qs.parse(body);
    callback(data)
  })
}

// 渲染简单的表单
exports.actionForm = (id, path, label) => {
  let html = `
    <form action="${path}" method="POST">
      <input type="hidden" name="id" value="${id}">
      <input type="submit" value="${label}">
    </form>
  `
}

// 添加数据到数据库
exports.add = (db, req, res) => {
  exports.parseReceivedData(req, work => {
    db.query(
      `insert into work (hours, date, description) values(?,?,?)`,
      [work.hours, work.date, work.description],
      err => {
        if (err) throw err;
        exports.show(db, res)
      }
    )
  })
}

// 删除数据
exports.delete = (db, req, res) => {
  exports.parseReceivedData(req, work => {
    db.query(
      `delete from work where id = ?`,
      [work.id],
      err => {
        if (err) throw err;
        exports.show(db, res)
      }
    )
  })
}

// 存档一个数据
exports.archive = (db, req, res) => {
  exports.parseReceivedData(req, work => {
    db.query(
      `update work set archive = ? where id = ?`,
      [work.id],
      err => {
        if (err) throw err;
        exports.show(db, res)
      }
    )
  })
}

exports.show = (db, res, showArchived) => {
  let archiveValue = showArchived ? 1 : 0
  db.query(
    `select * from work where archived = ? order by date DESC`,
    [archiveValue],
    (err, rows) => {
      if (err) throw err;
      let html = showArchived ? '' : `
        <a href="/archived}">Archived Word</a>
        ${exports.workHitlistHtml(rows)}
        ${exports.workFormatHtml()}
      `
      exports.sendHtml(res, html)
    }
  )
}

exports.showArchived = (db, res) => {
  exports.show(sb, res, true)
}

// 将工作记录渲染成 HTML表格
exports.workHitlistHtml = rows => {
  let html = '<table>'
  for (let i in rows) {
    html += '<tr>'
    html += `<td>${rows[i].date}</td>`
    html += `<td>${rows[i].hours}</td>`
    html += `<td>${rows[i].description}</td>`
    if (!rows[i].archived) {
      html += `<td>${exports.workArchiveForm(rows[i].id)}</td>`
    }
    html += `<td>${exports.workDeleteForm(rows[i].id)}</td>`
    html += '</tr>'
  }
  html += '</table>'
  return html
}

exports.workFormatHtml = () => {
  let html = `
  <form action="/" method="POST">
    <p>Date(YYYY-MM-DD):<br /> <input type="text" name="date"> </p>
    <p>Hours worked:<br /> <input type="text" name="hours"> </p>
    <p>Description:<br /> <input type="text" name="description">
    <input type="submit" value="Add">
  </form>
  `
  return html
}

// 渲染归档按钮表单
exports.workArchiveForm = id => {
  return exports.actionForm(id, '/archive', 'Archive')
}

// 渲染删除按钮表单
exports.workDeleteForm = id => {
  return exports.actionDeleteForm(id, '/delete', 'Delete')
}