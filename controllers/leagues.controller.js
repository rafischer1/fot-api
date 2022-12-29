const model = require('../models/leagues.model')

const getAll = (req, res, next) => {
    return model.getAll()
        .then((leagues) => {
            res.status(200).json(leagues)
        })
}

const getLeagueById = (req, res, next) => {
    let id = req.params.league_id
    return model.getLeagueById(id)
        .catch(error => {
            return next({
                status: 404,
                message: error
            })
        })
        .then(data => {
            console.log(data)
            res.json(data)
        })
}
