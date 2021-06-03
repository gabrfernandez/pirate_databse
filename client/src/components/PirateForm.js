import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import {Button} from 'react-bootstrap'

export default function PirateForm({ pirate, method, url }) {
    const [name, setName] = useState(pirate.name);
    const [imageUrl, setImageUrl] = useState(pirate.imageUrl);
    const [treasures, setTreasures] = useState(pirate.treasures);
    const [phrase, setPhrase] = useState(pirate.phrase);
    const [position, setPosition] = useState(pirate.position);
    const [pegLeg, setPegLeg] = useState(pirate.pegLeg);
    const [eyePatch, setEyePatch] = useState(pirate.eyePatch);
    const [hookHand, setHookHand] = useState(pirate.hookHand);

    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);

        axios[method](url, {
            name,
            imageUrl,
            treasures,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(() => navigate('/pirates'))
            .catch(err => {
                const errs = [];
                const innerErrorObject = err.response.data.errors;

                for (const key in innerErrorObject) {
                    errs.push(innerErrorObject[key].message);
                }
                setErrors(errs)
            })
    }

    return (
        <div>
            {errors.map((err, i) => (
                <p key={i} style={{ color: 'red' }}>{err}</p>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pirate Name</label>
                    <input
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Image Url</label>
                    <input
                        name="imageUrl"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label># of Treasures</label>
                    <input
                        name="treasures"
                        value={treasures}
                        type="number"
                        onChange={e => setTreasures(e.target.value)}
                    />
                </div>
                <div>
                    <label>Pirate Catch Phrase</label>
                    <input
                        name="phrase"
                        value={phrase}
                        onChange={e => setPhrase(e.target.value)}
                    />
                </div>
                <div>
                    <label>Crew Position</label>
                    <select name="position" value={position} onChange={e => setPosition(e.target.value)}>
                        <option value=""> </option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Monkey</option>
                    </select>
                </div>
                <div>
                    <label>Peg Leg</label>
                    <input
                        type="checkbox"
                        checked={pegLeg}
                        onChange={e => setPegLeg(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Eye Patch</label>
                    <input
                        type="checkbox"
                        checked={eyePatch}
                        onChange={e => setEyePatch(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Hook Hand</label>
                    <input 
                        type="checkbox"
                        checked={hookHand}
                        onChange={e=>setHookHand(e.target.checked)}
                    />
                </div>
                <Button variant="success">Add Pirate</Button>
            </form>
        </div>
    )
}