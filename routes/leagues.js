const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/leagues.controller')
/* GET users listing. */
router.get('/', ctrl.getAll)
router.get('/:league_id', ctrl.getLeagueById)
module.exports = router;


const getCostumeById = (req, res, next) => {
  let id = req.params.costume_id
  return model.getCostumeById(id)
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
