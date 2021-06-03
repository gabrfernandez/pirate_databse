import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 
import Footer from '../components/Footer';

export default function SinglePirate(props){
    const[pirate, setPirate]=useState(null);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates/' +props.id)
            .then(response=>setPirate(response.data));
    },[props.id]);

    if (pirate===null) return 'Loading... Trying to spot fellow Pirate';

    return (
        <div>
            <h1>{pirate.name}</h1>
            <img src={pirate.imageUrl} alt={pirate.name} height="200" width="200"/>
            <p>Phrase: {pirate.phrase}</p>
            <div>
                <h3>About</h3>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.treasures}</p>
                <p>Peg Leg: {pirate.pegLeg ? 'Yes' :'No'}</p>
                <p>Eye Patch: {pirate.eyePatch ? 'Yes' :'No'}</p>
                <p>Hook Hand: {pirate.hookHand ? 'Yes' :'No'}</p>
            </div>
            <Footer />
        </div>
    )
}