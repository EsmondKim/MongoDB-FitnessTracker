const router = require("./htmlroutes");
const Exercises = require("../models/exercises.js");

router.get("/api/workouts", (req, res) => {
  Exercises.find({})
    .sort({ date: -1 })
    .then((dbExercises) => {
      res.json(dbExercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/", ({ body }, res) => {
  console.log(body);
  Exercises.create(body)
    .then((dbExercises) => {
      res.json(dbExercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
