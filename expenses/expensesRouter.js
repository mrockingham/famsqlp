const router = require('express').Router()
const expensedb = require('./expensesModel')



router.get('/', (req, res)=>{
    expensedb.add()
    .then(expenses=>{
        res.status(200).json(expenses)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})


router.get('/:id', (req, res) =>{
    

    expensedb.findById(req.params.id)
    .then(expenses =>{
        if(expenses){
           res.status(200).json(expenses)
        } else {
            res.status(404).json({message:'comment id not found'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'failed', err})
    })
})
// post request to post/save a comment

router.post('/', (req, res)=>{
    expensedb.add(req.body)
    .then(expenses =>{
        res.status(201).json(expenses)
    })
    .catch(err =>{
        res.status(400).json({errorMessage: "Please provide title and contents for the post."})
    })
})

router.delete('/:id', (req,res)=>{
    expensedb.remove(req.params.id)
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