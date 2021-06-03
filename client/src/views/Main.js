import React, {useState, useEffect} from 'react'; 
import {navigate, Link} from '@reach/router';
import axios from 'axios'; 
import DeleteButton from '../components/DeleteButton'
import {Table, Button} from 'react-bootstrap'
import Footer from '../components/Footer'
import ViewPirate from '../components/ViewPirate';

export default function AllPirates(){
    const[pirates, setPirates]=useState(null)
    const [hasError, setHasErrors]=useState(false); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>setPirates(res.data))
            .catch(()=>setHasErrors(true));
    }, [pirates]);

    if(hasError) return "Something is wrong, where is the ship!";

    if (pirates==null) return "Loading the ship..."

    return(
        <div>
            <h1>Pirate Crew</h1>
            <Button variant="success">
                <Link to='/pirates/new' className="btn">Add Pirate</Link>
            </Button>
            <Table striped bordered hover responsive className="table-lg">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pirates.map(pirate=>(
                        <tr key={pirate._id}>
                            <td>
                                <img src={pirate.imageUrl} alt={pirate.name} height="200" width="200"/>
                            </td>
                            <td>
                                <p>{pirate.name}</p>
                            </td>
                            <td>
                                {/* <Link to={'/pirates/'+pirate._id}>View Pirate</Link> */}
                                <ViewPirate type="button" class="btn btn-info"
                                    pirateId={pirate._id} 
                                />
                                <DeleteButton type="button" class="btn btn-danger" 
                                    pirateId={pirate._id}
                                    successCallback={()=>navigate('/pirates/')}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Footer />
        </div>
    )
}