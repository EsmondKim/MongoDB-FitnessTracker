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

exercisesSchema.virtual("totalDuration").get(function () {
  const exerciseDurations = exercisesSchema.duration;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  exerciseDurations.reduce(reducer);
  console.log("This is the REDUCER!!!", reducer);
  return reducer;
});

const exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = exercises;
