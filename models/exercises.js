const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type (cardio or resistance) for the exercise.",
      },

      name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise.",
      },

      duration: {
        type: Number,
        required: "Enter a duration for the exercise in minutes.",
      },
      weight: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

//Start of virtuals code from exercises.js model.
// exercisesSchema
//   .virtual("totalDuration")
//   .get(async function getDuration(accumulator, currentValue, index, array) {
//     console.log("We got to teh` duraction schema.");
//     const lastWorkout = await API.getLastWorkout();
//     const exerciseDurations = lastWorkout.totalDuration;
//     console.log("This is the exDur man!", exerciseDurations);

//     if (index === array.length - 1) {
//       return accumulator + currentValue;
//     }
//     return accumulator + currentValue;
//   });

// let calculatedDuration = exerciseDurations.reduce(getDuration);
// console.log("This is the REDUCER!!!", calculatedDuration);
//End of virtuals code from exercises.js model.

const exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = exercises;
