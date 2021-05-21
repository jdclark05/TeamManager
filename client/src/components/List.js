import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const List = (props) => {
    const { players, onRender  } = props;

    const onDeleteHandler = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/form/${id}/delete`)
            .then(res => {
                onRender();
                navigate("/");
            })
    }

    return(
        <div className="listMain">
             <div className="tableMain" >
                 <div className="listNav">
                    <h3 className="header1"><Link id="gameLink" to="/">Player List</Link></h3>
                    <h3 className="header2"><Link id="gameLink" to="/players/add"> Add Player</Link></h3>
                 </div>
                <div className="tableSub">
                    <div className="tableHeaders">
                        <h3 className="header3">Team Name</h3>
                        <h3 className="header4">Preferred Position</h3>
                        <h3 className="header5">Actions</h3>
                    </div>
                    {players.map((player, index) => {
                        return(
                            <div className="tableRow" key={index}>
                                <div className="playerColumn">
                                    <p className="playerName" >{player.name}</p>
                                </div>
                                <div className="positionColumn">
                                    <p className="playerPosition" >{player.preferred_position || "Undecided"}</p>
                                </div>
                                <div className="buttonsED">
                                    <button className="deleteButton" onClick={ (e) => { if (window.confirm('Are you sure you wish to remove this player?')) onDeleteHandler(e, player._id)}}>Delete</button>
                                </div>
                            </div>
                        )
                    })} 
                </div>
            </div>
        </div>
    );
}

export default List;