// app.js
const express = require('express')
const app = express()
const baseRoutes = require('./routes/baseRoutes')

app.use('/', baseRoutes)

module.exports = app
