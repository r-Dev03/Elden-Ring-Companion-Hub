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
                            <BossForm preLoadedData={''}/>
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                        </>
                    } />
                    <Route path='/Areas' element={
                        <>
                            <Navbar />
                            <AreaForm preLoadedData={''} />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                        </>
                    } />
                    <Route path='/Crafting' element={
                        <>
                            <Navbar />
                            <CraftingForm preLoadedData={''}/>
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
                            <CheatSheet />
                        </>
                    } />
                    <Route path='/Logs' element={
                        <>
                            <Navbar />
                            <Organizer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
