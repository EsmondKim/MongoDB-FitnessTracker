const router = require("./htmlroutes");
const Exercises = require("../models/exercises.js");

router.get("/api/workouts", (req, res) => {
  Exercises.find({})
    .sort({ date: -1 })
    .then((dbExercises) => {
      console.log(dbExercises);
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

router.post("/api/workouts/:params", (req, res) => {
  console.log(req);
  console.log(params);
  db.exercises.update(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    {
      $set: {
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        modified: Date.now(),
      },
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;
