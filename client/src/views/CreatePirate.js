import React from 'react';
import {Link} from '@reach/router';
import PirateForm from '../components/PirateForm';
import Footer from '../components/Footer'
import {Button} from "react-bootstrap"

export default function CreatePirate(){
    const createPirate={
        name:"",
        imageUrl:"",
        treasures:"",
        phrase:"",
        position:"",
        pegLeg:true,
        eyePatch:true,
        hookHand:true
    };
    return (
        <div>
            <h1>Add a Pirate</h1>
            <Button variant="warning">
                <Link to="/">Go to Crew Board</Link>
            </Button>
            <PirateForm
                pirate={createPirate}
                method="post"
                url="http://localhost:8000/api/pirates"
            />
            <Footer />
        </div>
    )
}