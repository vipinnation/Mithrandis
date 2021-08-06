const express = require('express')
const mcqController = require('../App/Controller/mcqController')
const questionBank = require('../App/Controller/questionBank')
const route = express.Router()

// route.get('/', (req, res) => {
//     res.render('index')
// })

route.get('/', mcqController().index)

route.post('/submitform', mcqController().checkAnswer)


route.get('/addquestion', questionBank().index)
module.exports = route