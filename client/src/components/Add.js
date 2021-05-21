import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import { navigate, Link } from '@reach/router';

const Add = (props) => {
    const { onRender  } = props;
    const [errors, setErrors] = useState("")
    const [positionErrors, setPositionErrors] = useState("");
    const [name, setName] = useState(""); 
    const [preferred_position, setPreferred_Position] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/form/player', {
            name,
            preferred_position
        })
        .then(res=> {
            if(res.data.error) {
                console.log("ERROR DATA HERE", res.data.error)
                setErrors(res.data.error.errors.name.message);
                setPositionErrors(res.data.error.errors.preferred_position.message)
            }
            if (!res.data.error) {
                onRender();
                navigate('/');
            }
            console.log(res)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="listMain">
             <div className="tableMain" >
                 <div className="listNav">
                 </div>
                <div className="tableSub3">
                    <h1 className="addPlayerText" >Add Player</h1>
                    <form onSubmit={onSubmitHandler} className="formMain">
                        <p className="formAttributes1">
                            <label className="formLabel" >Player Name:</label>
                            <input className="formInput" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                        </p>
                        <p className="nameErrors">
                            <span style={{fontSize: '1rem', color: 'red'}}>{errors ? errors: "" }</span>
                        </p>
                        <p className="formAttributes2">
                            <label className="formLabel2" >Preferred Position:</label>
                            <input className="formInput2" type="text" onChange={(e)=>setPreferred_Position(e.target.value)} value={preferred_position} placeholder="Undecided"/>
                        </p>
                        <p className="nameErrors">
                            <span style={{fontSize: '1rem', color: 'red'}}>{errors ? positionErrors: "" }</span>
                        </p>
                        <div className="formButton">
                            <button className="addButton" onClick={onSubmitHandler}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add;