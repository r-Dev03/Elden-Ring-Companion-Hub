import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import BossForm from './components/BossForm.js'
import AreaForm from './components/AreaForm';
import CraftingForm from './components/CraftingForm';
import Organizer from './components/Organizer';
import { Link } from 'react-router-dom'
import CheatSheet from './components/CheatSheet';

function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={
                        <>
                            <Navbar />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                        </>} />
                    <Route path='/Bosses' element={
                        <>
                            <Navbar />
                            <BossForm />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                        </>
                    } />
                    <Route path='/Areas' element={
                        <>
                            <Navbar />
                            <AreaForm />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                        </>
                    } />
                    <Route path='/Crafting' element={
                        <>
                            <Navbar />
                            <CraftingForm />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                        </>
                    } />
                    <Route path='/CheatSheet' element={
                        <>
                            <Navbar />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                            <h2>https://eldenring.fanapis.com/api/items?limit=2</h2>
                            <CheatSheet />
                        </>
                    } />
                    <Route path='/Logs' element={
                        <>
                            <Organizer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
