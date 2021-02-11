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
        required: "Enter a weight amount.",
      },
      reps: {
        type: Number,
        required: "Enter a number of reps.",
      },
      sets: {
        type: Number,
        required: "Enter a number of sets.",
      },
    },

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
      distance: {
        type: Number,
        required: "Enter a distance for the exercise.",
      },
    },
  ],
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
