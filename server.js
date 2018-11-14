const express = require('express')
const server = express()
const routerApi = require('./router.js')
const PORT = (process.env.API_PORT || 80)
// API Router
server.use('/api', routerApi)

// Listen on port

server.listen(PORT)
console.log("Running on " + PORT)
