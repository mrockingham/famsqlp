const server = require('./server')

const express = require('express')
const dotenv = require('dotenv')



dotenv.config({path: './config/config.env'})


const PORT = process.env.PORT || 5002
server.listen(PORT, () => console.log(`the server has started on port: ${PORT}`))