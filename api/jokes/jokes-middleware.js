const Jokes = require('./jokes-model')

const checkId = (req, res, next) => {
    const id = req.params.joke_id
    Jokes.findById(id)
    .then(joke => {
        if (!joke) {
            res.status(404).json({
                message: `joke doesn't exist`
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
}

const confirmNewJoke = (req, res, next) => {
    const joke_name = req.body.joke_name

    Jokes.findBy({joke_name})
    .then(([joke]) => {
        if(joke) {
            res.status(422).json({
                message: `Joke ${joke_name} already exists`
            })
        } else {
            next()
        }
    })
}

module.exports = {
    checkId,
    confirmNewJoke
}