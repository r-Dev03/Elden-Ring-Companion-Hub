import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import BossForm from './components/BossForm.js'
import AreaForm from './components/AreaForm';
import CraftingForm from './components/CraftingForm';
import Organizer from './components/Organizer';

function App() {


    const keys = Object.keys(localStorage)
    for (let key of keys) {
        console.log(`${key}: ${localStorage.getItem(key)}`)
    }

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
                            <Organizer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
