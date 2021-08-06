const mongoose = require('mongoose')


const questionBankSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    questions: {
        type: Object,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = new mongoose.model('questionbank', questionBankSchema)