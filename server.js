const express = require("express")
const app = express();
const path = require('path')
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'Resources/Views'))
app.use(express.static(path.join(__dirname, 'Resources')))
app.use(express.urlencoded({ extended: true }))

const route = require('./Route/web')
app.use('/api', route)



/**
 * Joining REACT and NODEJS
 */
app.use(express.static('client/build'));
app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`))