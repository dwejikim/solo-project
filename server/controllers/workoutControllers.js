const fs = require('fs/promises');
const fsCallback = require('fs');
const path = require('path');

const workoutController = {};

//add middleware to the controller obj;


//create new workout
workoutController.createWorkout = (req, res, next) => {
    res.locals.newWorkout = req.body;
    return next();
}


//get workout data
workoutController.getWorkout = (req, res, next) => {
    
}


module.exports = workoutController;