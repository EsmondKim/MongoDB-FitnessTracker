const router = require("./htmlroutes");
const exercises = require("../models/exercises.js");

router.get("/api/workouts", (req, res) => {
  exercises
    .find({})
    .sort({ date: -1 })
    .then((dbExercises) => {
      res.json(dbExercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  exercises
    .find({})
    .sort({ date: -1 })
    .then((dbExercises) => {
      res.json(dbExercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  exercises
    .create(body)
    .then((dbExercises) => {
      res.json(dbExercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  const workout = req.body;

  exercises
    .findByIdAndUpdate(id, { $push: { exercises: workout } }, { new: true })

    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
