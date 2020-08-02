const router = require('express').Router()
const expenseDb = require('./expenseModel')


router.post('/', (req, res)=>{
    expenseDb.add(req.body)
    .then(expenseApp=>{
        res.status(201).json(expenseApp)
    })
    .catch(err =>{
        res.status(400)
    })
})


router.get('/', (req, res)=>{
expenseDb.find()
.then(expenseApp =>{
    res.status(200).json(expenseApp)
})
.catch(err =>{
    res.status(500).json({msg: 'unable to get expenseApp'})
})
})

router.get('/:id', (req, res) =>{
    

    expenseDb.findById(req.params.id)
    .then(expenseApp =>{
        if(expenseApp){
           res.status(200).json(expenseApp)
        } else {
            res.status(404).json({message:'comment id not found'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'failed', err})
    })
})

router.delete('/:id', (req,res)=>{
    expenseDb.remove(req.params.id)
  .then( id =>{
    if(id) {
        res.status(200).json({removed: req.body})
        
    } else {
        res.status(400).json({message: " The bookmark with the specified ID does not exist"})
    }
  })  
  .catch(err =>{
      res.status(500).json({message:'comment not removed.....muhahahahaahahaha'})
  })
})
module.exports = router