import './index.css';
import React from 'react';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className='oBtnContainer'>
                <button className='organizerBtn'>Organizer</button>
                <Form />
            </div>
        </div>
    );
}

export default App;
