import React from 'react';
import {Button} from 'react-bootstrap';
import { Link} from '@reach/router';


 const ViewPirate = ({pirateId}) => {
    
    return (
        <Button variant = "info" >
            <Link to={'/pirates/'+pirateId}>View Pirate</Link>
        </Button>
    )
}

export default ViewPirate
