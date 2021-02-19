const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema(
  {
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

exercisesSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise, index) => {
    return total + exercise.duration;
  }, 0);
});

const exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = exercises;
