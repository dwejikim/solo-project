const express = require('express');
const app = express();
const path = require('path');
const workouts = require('./routers/workout.js');
const PORT = 3000;




//catch all route handler for errors;
app.use('*', (req, res) => res.status(404));

//global error handler;
const errorHandler = (err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error has occurred' }, 
      };
      const errorObj = Object.assign(defaultErr, err);
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
}





app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  }); //listens on port 3000 -> http://localhost:3000/

  module.exports = app;