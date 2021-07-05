const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", async ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
