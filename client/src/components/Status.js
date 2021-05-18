import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from '@reach/router';


const Status = (props) => {
    const { players, onRender  } = props;
    let num = props["num"];
    let game = "game".concat(num);

    const playing = {
        backgroundColor: 'Green'
    }

    const notPlaying = {
        backgroundColor: 'red'
    }

    const undecided = {
        backgroundColor: 'yellow'
    }

    const onStatusHandler = (e, value, id) => {
        e.preventDefault();
        const player = players.find((p)=> {
            if(p._id === id) {
                return p;
            }
        });
        console.log(player)
        axios.put(`http://localhost:8000/form/${id}/update`, {
            status: {
                ...player.status,
                [game]: value
            }
        })
        .then(res => {
            onRender();
        })
    }


    return(
    <div className="listMain">
            <div className="listHeader">
                <h1>Player Status Game {num}</h1>
            </div>
            <div className="gameSelector">
            <div>
                <p className="game1" ><Link to="/status/game/1"> Game 1 </Link></p>
            </div>
            <div>
                <p className="game2"><Link to="/status/game/2"> Game 2 </Link></p>
            </div>
            <div>
                <p className="game3"><Link to="/status/game/3"> Game 3 </Link></p>
            </div>
            </div>
            <div className="tableMain2" >
                <div className="tableHeaders2">
                <h3 className="header6">Team Name</h3>
                <h3 className="header7">Actions</h3> 
                </div>

            <div className="tableSub2">
                {players.map((player, index) => {
                    return(
                        <div className="tableRow2" key={index}>
                            <p className="playerName2" >{player.name}</p>
                            <div className="buttonsPNU">
                                <button className="playingButton" value="Playing" onClick={ (e) => onStatusHandler(e, e.target.value, player._id)} style={player.status[game] === "Playing" ? playing: undefined}>Playing</button>
                                <button className="notPlayingButton" value="Not Playing" onClick={ (e) => onStatusHandler(e, e.target.value, player._id)} style={player.status[game] === "Not Playing" ? notPlaying: undefined}>Not Playing</button>
                                <button className="undecidedButton" value="Undecided" onClick={ (e) => onStatusHandler(e, e.target.value, player._id)} style={player.status[game] === "Undecided" ? undecided: undefined}>Undecided</button>
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
    </div>
    );
}

export default Status;