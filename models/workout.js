const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day: {
    type: Date,
    default: Date.now
},
exercises: [{
    type: {
        type: String,
        trim: true,
        required: "What workout are you doing today?"
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter the exercise name"
    },
}]
})