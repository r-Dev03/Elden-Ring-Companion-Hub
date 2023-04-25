import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import BossForm from './components/BossForm.js'

function App() {
     const [showBossForm, setShowBossForm] = useState(false)

    return (
        <div className="App">
            <Navbar />
            <div>
                <button className='organizerBtn'>Organizer</button>
                <BossForm />
            </div>
        </div>
    );
}

export default App;
