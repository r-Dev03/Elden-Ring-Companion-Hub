import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import BossForm from './components/BossForm.js'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={
                        <>
                            <Navbar />
                            <button className='organizerBtn'>Organizer</button>
                        </>} />
                    <Route path='/Bosses' element={
                        <>
                            <Navbar />
                            <button className='organizerBtn'>Organizer</button>
                            <BossForm />
                        </>
                    } />
                    <Route path='/Areas' element={
                        <>
                            <Navbar />
                            <button className='organizerBtn'>Organizer</button>
                            <h1> Information about areas will be here</h1>
                        </>
                    } />
                    <Route path='/Crafting' element={
                        <>
                            <Navbar />
                            <button className='organizerBtn'>Organizer</button>
                            <h1>Crafting information will be here</h1>
                        </>
                    } />
                    <Route path='/CheatSheet' element={
                        <>
                            <Navbar />
                            <button className='organizerBtn'>Organizer</button>
                            <h1>Infoormation fetched from elden ring api will be here</h1>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
