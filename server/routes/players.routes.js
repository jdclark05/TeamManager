const PlayersController = require('../controllers/players.controller');

module.exports = (app) => {
    app.get('/form/allplayers', PlayersController.getAllPlayers);
    app.get('/form/:id', PlayersController.getOnePlayer);
    app.post('/form/player', PlayersController.createPlayer);
    app.put('/form/:id/update', PlayersController.updatePlayer);
    app.delete("/form/:id/delete", PlayersController.deletePlayer);
}