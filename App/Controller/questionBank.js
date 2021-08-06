const questionBank = () => {
    return {
        index(req, res) {
            res.render('addQuestion')
        }
    }
}


module.exports = questionBank