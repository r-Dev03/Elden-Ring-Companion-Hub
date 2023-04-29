import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import BossForm from './components/BossForm.js'
import AreaForm from './components/AreaForm';
import CraftingForm from './components/CraftingForm';

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
                            <AreaForm />
                        </>
                    } />
                    <Route path='/Crafting' element={
                        <>
                            <Navbar />
                            <button className='organizerBtn'>Organizer</button>
                            <CraftingForm />
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
