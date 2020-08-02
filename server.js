const express = require('express')
const serverConfig = require('./middleware/serverConfig')
const authenticate = require('./auth/auth-middleware')
const authRoute = require('./auth/auth-router')
const UserRouter =require('./users/usersRouter')
const expenseApp = require('./expenseApp/expenseRouter')
const expenseRouter = require('./expenses/expensesRouter')


const server = express()
serverConfig(server)

server.use('/api', authRoute)
server.use('/api/user', authenticate, UserRouter)
server.use('/api/expense_app', authenticate, expenseApp)
server.use('/api/expense', authenticate, expenseRouter)




server.get('/',(req,res)=>{
    res.send('server is up')
})



module.exports = server