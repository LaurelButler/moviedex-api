require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const MOVIES = require('./movies.json')

console.log(process.env.API_TOKEN)

const app = express()

app.use(morgan('dev'))

const movies = [`bug`, `love`, `ice`];

app.use(function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN
    const authToken = req.get('Authorization')
    console.log('validate bearer token middleware')
    if(!authToken || authToken.split(' ')[1] !== apiToken) {
        return res.status(401).json({ error: 'Unauthorized request' })
    }
    next() 
})

app.get('/movie', function handleGetMovie(req, res) {
    let response = MOVIES;

    if(req.query.genre) {

    }
    if(req.query.country) {

    }
    if(req.query.avg_vote) {
        
    }
})

// function handleGetTypes(req, res) {
//     res.json(movies);
// };

// app.get('/movie', handleGetTypes)



const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})
