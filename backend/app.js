const express = require('express')
const app = express()

const cors = require('cors')
const login = require('./route-handlers/login')
const encode = require('./route-handlers/encodeHandler')
const authorization = require('./middleware/authorization')
app.use(express.json())

app.use(cors())

app.post('/login', login)
app.get('/encode',authorization,encode)

module.exports = app