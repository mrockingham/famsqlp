const router = require('express').Router()

const User = require('./userModel')




router.get('/', (req, res)=>{
   
    User.find()
    .then(user =>{
        res.status(200).json(user)
        console.log(user)
    })
    .catch(err =>{
        res.status(401).json(err)
    })
})

module.exports = router