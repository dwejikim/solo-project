const express = require('express')
const workoutController = require('../controllers/workoutControllers');
const router = express.Router();

router.get('/', workoutController.getWorkout, (req, res) => {
    res.status(200).json();
})

router.post('/', workoutController.createWorkout, (req, res) => {
    res.status(200).json(res.locals.newWorkout);
})



module.exports = router;