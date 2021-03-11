import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';


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

    return (
        <div style={{margin: '50px 100px 50px 220px', justifyContent: 'center', alignItems: 'center'}}>
            <Card style={cardStyle}>
                <Card.Img variant="top" src="holder.js/100px180" />
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