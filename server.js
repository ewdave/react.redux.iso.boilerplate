'use strict'

const express = require('express')
const app = express()

app.use(express.static('./dist'))
app.use('/img', express.static('./src/img'))

const render = require('./dist/render')

console.log(render)

app.get('*', function(req,res) {
  render(req.url, (html) => {
    return res.status(200).send(html)
  })
})

app.listen(process.env.PORT || 3000)
console.log("RRIB running on port", process.env.PORT || 3000)
