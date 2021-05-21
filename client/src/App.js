import { useState, useEffect } from 'react';
import { Router, Redirect, Link } from '@reach/router';
import './App.css';
import Status from './components/Status';
import Add from './components/Add';
import List from './components/List';
import axios from 'axios';
import appBackground from './components/images/sports-colorful.jpg';

function App() {
  const [players, setPlayers] = useState([]);

  const domUpdate = () => {
    axios.get('http://localhost:8000/form/allplayers')
    .then(res=> {
        setPlayers(res.data.allPlayers)
    })
    .catch(err=>console.log("Error: ", err))
  }

  useEffect(() => {
    axios.get('http://localhost:8000/form/allplayers')
        .then(res=> {
          console.log(res.data.allPlayers)
          setPlayers(res.data.allPlayers)
        })
        .catch(err=>console.log("Error: ", err))
  }, [])

  const styles = {
    backgroundImage: `url(${appBackground})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'cover',
    width: 'cover',
    height: '100vh',
    backdropFilter: 'opacity(.5)'
};

  return (
    <div className="appContainer" style={styles}>
      <div className="innerContentDiv">
        <div className="navDiv">
          <h1 className="navMain1"><Link id="gameLink" to="/players/list">Manage Players</Link></h1>
          <h1 className="navMain2"><Link id="gameLink" to="/status/game/1">Manage Player Status</Link></h1>
        </div>
        <Router>
          <Redirect from="/" to="/players/list"/>
            <List path = "/players/list" onRender={domUpdate} players={ players }/>
            <Add path="/players/add" onRender={domUpdate}/>
            <Status path="/status/game/:num" onRender={domUpdate} players={ players } />
        </Router>
      </div>

    </div>
  );
}

export default App;
