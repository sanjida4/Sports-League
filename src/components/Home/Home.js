import React, { useState, useEffect } from 'react';
import './Home.css';
import League from '../League/League';

const Home = () => {
    let [league, setLeague] = useState([]);

    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues));
    }, [])
    return (
        <div>
            <div className="hero-image">
                <div className="overlay">
                    <h3 style={{background: 'none'}}>SPORTS LEAGUE</h3>
                </div>
            </div>
            <div className="leagues">
                    {
                       league.map(leagues => <League leagues = {leagues}></League>)
                    }
            </div>
        </div>
    );
};

export default Home;