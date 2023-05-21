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
                                <button className='organizerBtn'></button>
                            </Link>
                            <footer className='footer'>
                                <p className='footer-text'>Created by
                                    <Link to={`https://github.com/r-Dev03`} className='footer-link'>Ribbal Hussain</Link>
                                </p>
                                <a href="https://www.buymeacoffee.com/RibbalHussain" className='coffee-btn'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=RibbalHussain&button_colour=000000&font_colour=ffffff&font_family=Bree&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
                            </footer>
                        </>} />
                    <Route path='/Bosses' element={
                        <>
                            <Navbar />
                            <BossForm preLoadedData={''} />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'></button>
                            </Link>
                            <footer className='footer'>
                                <p className='footer-text'>Created by
                                    <Link to={`https://github.com/r-Dev03`} className='footer-link'>Ribbal Hussain</Link>
                                </p>
                                <a href="https://www.buymeacoffee.com/RibbalHussain" className='coffee-btn'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=RibbalHussain&button_colour=000000&font_colour=ffffff&font_family=Bree&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
                            </footer>
                        </>
                    } />
                    <Route path='/Areas' element={
                        <>
                            <Navbar />
                            <AreaForm preLoadedData={''} />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                            <footer className='footer'>
                                <p className='footer-text'>Created by
                                    <Link to={`https://github.com/r-Dev03`} className='footer-link'>Ribbal Hussain</Link>
                                </p>
                                <a href="https://www.buymeacoffee.com/RibbalHussain" className='coffee-btn'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=RibbalHussain&button_colour=000000&font_colour=ffffff&font_family=Bree&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
                            </footer>
                        </>
                    } />
                    <Route path='/Crafting' element={
                        <>
                            <Navbar />
                            <CraftingForm preLoadedData={''} />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                            <footer className='footer'>
                                <p className='footer-text'>Created by
                                    <Link to={`https://github.com/r-Dev03`} className='footer-link'>Ribbal Hussain</Link>
                                </p>
                                <a href="https://www.buymeacoffee.com/RibbalHussain" className='coffee-btn'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=RibbalHussain&button_colour=000000&font_colour=ffffff&font_family=Bree&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
                            </footer>
                        </>
                    } />
                    <Route path='/CheatSheet' element={
                        <>
                            <Navbar />
                            <Link to={`/Logs`} >
                                <button className='organizerBtn'>Organizer</button>
                            </Link>
                            <CheatSheet />
                            <footer className='footer'>
                                <p className='footer-text'>Created by
                                    <Link to={`https://github.com/r-Dev03`} className='footer-link'>Ribbal Hussain</Link>
                                </p>
                                <a href="https://www.buymeacoffee.com/RibbalHussain" className='coffee-btn'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=RibbalHussain&button_colour=000000&font_colour=ffffff&font_family=Bree&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
                            </footer>
                        </>
                    } />
                    <Route path='/Logs' element={
                        <>
                            <Navbar />
                            <Organizer />
                            <footer className='footer'>
                                <p className='footer-text'>Created by
                                    <Link to={`https://github.com/r-Dev03`} className='footer-link'>Ribbal Hussain</Link>
                                </p>
                                <a href="https://www.buymeacoffee.com/RibbalHussain" className='coffee-btn'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=RibbalHussain&button_colour=000000&font_colour=ffffff&font_family=Bree&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
                            </footer>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
