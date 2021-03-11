import React from 'react';
import { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import './League.css';

const League = (props) => {
    const {idLeague, strLeague, strSport} = props.leagues;
    const cardStyle= {
        margin: '20px',
        padding: '20px',
        width: '400px', 
        height: '200px',
        display: 'inline-block', 
        float: 'left',
        border: '3px solid lightgray'
    }
    const history = useHistory();
    const showDetails = idLeague => {
        const url = `id/${idLeague}`;
        history.push(url);
    }

    const [league, setLeague] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues));
    }, [idLeague]);

    return (
        <div className="body">
            <Card style={cardStyle}>
            {
                league.length > 0 && (
                    <Card.Img variant="top" style={{marginLeft: '20%'}} src={league[0].strLogo} height="100px" />
                )
            }

                <Card.Body>
                    <Card.Title><h2>{strLeague}</h2></Card.Title>
                    <Card.Text>
                    Sports Type: {strSport}
                    </Card.Text>
                </Card.Body>
                <br/>
                <>
                <Button onClick={() => showDetails(idLeague)} style={{padding: '5px', border: '2px solid mediumblue', borderRadius: '5px',margin: '0 42%', color: 'mediumblue', display: 'flex', fontSize: '15px', background: 'none'}}>Explore <FaArrowRight /></Button> 
                </>
            </Card>
        </div>
    );
};

export default League;