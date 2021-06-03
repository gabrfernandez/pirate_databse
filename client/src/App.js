import React from 'react';
import './App.css';
import { Redirect , Router} from '@reach/router';
import Main from './views/Main';
import SinglePirate from './views/SinglePirate';
import CreatePirate from './views/CreatePirate';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="pirates/" />
        <SinglePirate path="pirates/:id" />
        <CreatePirate path="pirates/new" />
        <Redirect
          from="/"
          to="/pirates"
          noThrow
        />
      </Router>
      
    </div>
  );
}

export default App;
