const Players = require('../models/players.model');


const getAllPlayers = (req, res) => {
    Players.find({})
        .then(allPlayers => res.json({allPlayers: allPlayers}))
        .catch((err) => res.json({message: "Error: Search request not fulfilled", error:err}))
}

const getOnePlayer = (req, res) => {
    Players.find({_id: req.params.id})
        .then(newPlayer => res.json({players: newPlayer}))
        .catch((err) => res.json({message: "Error: Search request not fulfilled", error:err}))
}


const createPlayer = (req, res) => {
    Players.create(req.body)
        .then((newPlayer) => res.json({Player: newPlayer}))
        .catch(err => res.json({message: "Error: Create request not fulfilled", error:err}))
}

const updatePlayer = (req, res) => {
    Players.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatePlayer => res.json({Player: updatePlayer}))
        .catch((err) => res.json({message: "Error: Update request not fulfilled", error:err}))
}

const deletePlayer = (req, res) => {
    Players.findByIdAndDelete({_id: req.params.id })
        .then(result => req.json({result: result}))
        .catch(err => res.json({message: "Error: Delete request not fulfilled", error:err}))
}

module.exports = { getAllPlayers, getOnePlayer, createPlayer, updatePlayer, deletePlayer };