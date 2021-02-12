const router = require("./htmlroutes");
const Exercises = require("../models/exercises.js");

router.get("/api/workouts", (req, res) => {
  Exercises.find({})
    .sort({ date: -1 })
    .then((dbExercises) => {
      //console.log(dbExercises);
      res.json(dbExercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
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
  //console.log(body);
  Exercises.create(body)
    .then((dbExercises) => {
      res.json(dbExercises);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.post("/api/workouts/:params", (req, res) => {
//   console.log(req);
//   console.log(params);
//   db.exercises.update(
//     {
//       _id: mongojs.ObjectId(req.params.id),
//     },
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

router.put("/api/workouts/:id", (req, res) => {
  //console.log(req.body);
  Exercises.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: { $push: { exercises: req.body } },
    }
  ).then((data) => {
    res.json(data);
  });
});

module.exports = router;
