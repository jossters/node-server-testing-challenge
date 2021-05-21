const router = require('express').Router()
const {checkId, confirmNewJoke} = require('./jokes-middleware')
const Jokes = require('./jokes-model')

// [GET] /api/jokes/
router.get('/', (req, res, next) => {
    Jokes.findAll()
    .then(jokes => {
        res.json(jokes)
    })
    .catch(next)
})

// [GET] /api/jokes/:joke_id
router.get('/:creator_id', checkId, (req, res, next) => {
    const {jokes_id} = req.params

    Jokes.findById(jokes_id)
    .then(jokes => {
        res.json(jokes)
    })
    .catch(next)
})

// [POST] api/jokes/
router.post('/', confirmNewJoke, (req, res, next) => {
    Jokes.addJoke(req.body)
    .then(jokes => {
        res.status(201).json(jokes)
    })
    .catch(next)
})

// [DELETE] api/jokes/:joke_id
router.delete('/:joke_id', checkId, (req, res, next) => {
    Jokes.remove(req.params.creator_id)
    .then(() => {
        res.status(200).json({
            message: `Joke removed!`
        })
    })
})

module.exports = router