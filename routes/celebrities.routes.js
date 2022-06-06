// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model.js')

/////adding new celebrities////:iteration 3

router.post('/', async (req, res, next) => {
    try{
        const celeb= req.body
     const addOneceleb = await Celebrity.create(celeb);
    
    
    if (!celeb.name){
      res.status(400).json({
        message: 'BAD REQUEST',
      })
      return
    }
    res.status(201).json({
      message: 'CREATED ',
      body: req.body,
    })
}catch (error) {
    next(error);
  }
  })


  //////Iteration 4 get all celeb

  router.get('/', async (req, res, next) => {
    try {
      const allCeleb = await Celebrity.find()
      res.status(200).json(allCeleb)
    } catch (err) {
      
      next(err)
    }
  })



module.exports = router