const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters"]
    },
    preferred_position: {
        type: String, 
        default: 'Undecided'
    },
    status : {
        game1: {
            type: String, 
            default: 'Undecided'
        },
        game2: {
            type: String, 
            default: 'Undecided'
        },
        game3: {
            type: String, 
            default: 'Undecided'
        },
    }, 
}, { timestamps: true }
);

const Player = mongoose.model('Player', PlayerSchema)
module.exports = Player;