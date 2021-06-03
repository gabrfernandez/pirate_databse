import React from 'react'; 
import axios from 'axios'; 
import {Button} from 'react-bootstrap'

const DeleteButton=({pirateId, successCallback})=>{
    
    const deletePirate=e=>{
        axios.delete('http://localhost:8000/api/pirates/'+pirateId +'/delete')
            .then(res=>{
                successCallback();
            })
    }
    return(
        <Button variant = "danger" onClick={deletePirate}>
            Walk the Plank
        </Button>
    )
}
export default DeleteButton;