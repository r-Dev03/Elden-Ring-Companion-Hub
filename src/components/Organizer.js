import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import BossForm from "./BossForm";
import AreaForm from "./AreaForm";
import CraftingForm from "./CraftingForm";

const Organizer = () => {
    const areaLogs = JSON.parse(window.localStorage.getItem('areaLogs'))
    const bossLogs = JSON.parse(window.localStorage.getItem('bossLogs'))
    const craftingLogs = JSON.parse(window.localStorage.getItem('craftingLogs'))
    const [selectedLog, setSelectedLog] = useState('')

    function toggleLog(id) {
        selectedLog == id ? setSelectedLog('') : setSelectedLog(id)
    }

    //here is the return for the Organizer
    return (
        <>
            <div className="logsContainer">
                {bossLogs ? bossLogs.map(el => {
                    //here's the return for the loop
                    return (
                        <div className="bossLogsContainer">
                            <button className="button" onClick={() => toggleLog(el.id)}>{el.bossName} Strategy</button>
                            <div className={selectedLog == el.id ? "openLog" : "hideLog"} key={el.id}>
                                <button className="close-btn" onClick={() => toggleLog(el.id)}> <FaRegTimesCircle /></button>
                                <BossForm preLoadedData={el} />
                            </div>
                        </div>
                    )
                }) : <p>No Boss Strategies? Git Gud</p>}

                {areaLogs ? areaLogs.map(el => {
                    return (
                        <div className="areaLogsContainer">
                            <button className="button" onClick={() => toggleLog(el.id)}>{el.areaName} Strategy</button>
                            <div className={selectedLog == el.id ? "openLog" : "hideLog"} key={el.id}>
                                <button className="close-btn" onClick={() => toggleLog(el.id)}> <FaRegTimesCircle /></button>
                                <AreaForm preLoadedData={el}/>
                            </div>
                        </div>
                    )
                }) : <p>No Area Notes? Git Gud</p>}

                {craftingLogs ? craftingLogs.map(el => {
                    return (
                        <div className="craftingLogsContainer">
                            <button className="button" onClick={() => toggleLog(el.id)}>{el.itemName} Strategy</button>
                            <div className={selectedLog == el.id ? "openLog" : "hideLog"} key={el.id}>
                                <button className="close-btn" onClick={() => toggleLog(el.id)}> <FaRegTimesCircle /></button>
                                <CraftingForm preLoadedData={el}/>
                            </div>
                        </div>
                    )
                }) : <p>No Crafting Recipes? Git Gud</p>}
            </div>
        </>
    )
}

export default Organizer
