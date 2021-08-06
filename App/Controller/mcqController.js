const mcqController = () => {
    return {
        index(req, res) {
            res.render('mcq')
        },
        checkAnswer(req, res) {
            console.log(req.body)
            const { capital_india, capital_rajasthan } = req.body

            let marks = {
                right: 0,
                wrong: 0
            }

            if (capital_rajasthan == "Jaipur") {
                marks.right = marks.right + 1;
            }
            if (capital_india == "New Delhi") {
                marks.right = marks.right + 1;
            }
            if (capital_rajasthan != "Jaipur") {
                marks.wrong = marks.wrong + 1
            }
            if (capital_india != "New Delhi") {
                marks.wrong = marks.wrong + 1
            }


            res.send(marks)

        }
    }
}


module.exports = mcqController