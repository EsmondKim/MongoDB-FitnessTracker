const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },

  totalDuration: {
    type: Number,
    required: "Enter an amount",
  },
  numExercises: {
    type: Number,
    required: "Enter an amount",
  },
  totalWeight: {
    type: Number,
    required: "Enter an amount",
  },
  totalSets: {
    type: Number,
    required: "Enter an amount",
  },
  totalReps: {
    type: Number,
    required: "Enter an amount",
  },
  totalDistance: {
    type: Number,
    required: "Enter an amount",
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
