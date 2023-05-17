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
            <table className="table">
                <tbody>
                    {bossLogs ? bossLogs.map(el => {
                        //here's the return for the loop
                        return (
                            <label className="tableLabel">{el.bossName}</label>

                        )
                    }) : <p>No Boss Strategies? Git Gud</p>}
                </tbody>
                <tbody>
                    {areaLogs ? areaLogs.map(el => {
                        return (
                            <label className="tableLabel">{el.areaName}</label>
                        )
                    }) : <p>No Area Notes? Git Gud</p>}
                </tbody>
                <tbody>
                    {craftingLogs ? craftingLogs.map(el => {
                        return (
                            <label className="tableLabel">{el.itemName}</label>
                        )
                    }) : <p>No Crafting Recipes? Git Gud</p>}
                </tbody>
            </table>
        </>
    )
}

export default Organizer
