const db = require('../../data/dbConfig')

const findAll = () => {
    return db["jokes"]
}

async function findBy(filter) {    
    return db('jokes')
    .where(filter)
    .orderBy('joke_id')
}

async function findById(joke_id) {
    return db ["jokes"]
    .where("jokes.joke_id", joke_id).first()
}

async function addjoke(joke) {
    const [joke_id] = await db('jokes').insert(joke, 'joke_id')
    return db('jokes').where({joke_id}).first()
}

function remove(joke_id) {
    console.log(`remove ${joke_id}`)
    return db('jokes')
    .where({joke_id})
    .del()
}

module.exports = {
    findAll,
    findBy,
    findById,
    addjoke,
    remove
}