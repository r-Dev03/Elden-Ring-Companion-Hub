import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import BossForm from './components/BossForm.js'

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className='oBtnContainer'>
                <button className='organizerBtn'>Organizer</button>
                <BossForm />
            </div>
        </div>
    );
}

export default App;
