// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Movie = require('../models/Movie.model.js')

///////Iteration #6: Adding New Movies
router.post('/', async (req, res, next) => {
  try{
      const movie= req.body
   const addOnemovie = await Movie.create(movie);
  
  
  if (!movie.title){
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

///////Iteration #7: Listing Our Movies

router.get('/', async (req, res, next) => {
  try {
    const allmovies = await Movie.find()
    res.status(200).json(allmovies)
  } catch (err) {
    
    next(err)
  }
})

///////Iteration #8: The Movie Details Endpoint

router.get('/:id', async (req, res, next) => {
  try {
      const movieId = req.params.id
      const onemovieid = await Movie.findById(req.params.id).populate('cast')
      res.status(200).json(onemovieid)
  } catch (err) {
      next(err)
  }
})

//////////////////Iteration #9: Deleting Movies

router.delete('/movies/:id/', async (req, res, next) => {
  try {
      const deletedThing = await Movie.findByIdAndRemove(req.params.id)
      res.status(204).send(deletedThing);
  } catch (err) {

      next(err)
  }
})


//////////////Iteration #10: Editing Movies

router.post('/movies/:id', async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const findMovie = await Movie.findByIdAndUpdate(movieId,req.body,{new:true});
    res.status(200).res.json(findMovie);
  } catch (error) {
    next(error);
  }
});
module.exports = router;



// all your routes here

module.exports = router