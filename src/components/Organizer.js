import React, { useState } from "react";
import { FaRegTimesCircle, FaTrash, FaPencilAlt } from "react-icons/fa";
import BossForm from "./BossForm";
import AreaForm from "./AreaForm";
import CraftingForm from "./CraftingForm";

const Organizer = () => {
    const areaLogs = JSON.parse(window.localStorage.getItem('areaLogs'))
    const bossLogs = JSON.parse(window.localStorage.getItem('bossLogs'))
    const craftingLogs = JSON.parse(window.localStorage.getItem('craftingLogs'))
    const [selectedLog, setSelectedLog] = useState('')
    const [editMode, setEditMode] = useState(false)

    function toggleLog(id) {
        selectedLog == id ? setSelectedLog('') : setSelectedLog(id)
    }

    function toggleEditMode() {
        setEditMode(!editMode)
        console.log(editMode)
    }

    //here is the return for the Organizer
    return (
        <>
            <table className="table">
                <tbody>
                    {bossLogs ? bossLogs.map(el => {
                        //here's the return for the loop
                        return (
                            <>
                                <label className="tableLabel" onClick={() => toggleLog(el.id)}>{el.bossName}</label>
                                <div className={selectedLog == el.id ? "openLog" : "hideLog"} key={el.id}>
                                    <div className="buttons">
                                        <button className="delete-btn"><FaTrash /></button>
                                        <button className="edit-btn" onClick={() => toggleEditMode()}></button>
                                        <button className="close-btn" onClick={() => toggleLog(el.id)}> <FaRegTimesCircle /></button>
                                    </div>
                                    {editMode == false ?
                                        <div className="logInfo">
                                            <span> Boss: {el.bossName}</span>
                                            <span> Type: {el.bossType}</span>
                                            <span> Attack Patterns: {el.bossAttackPatterns}</span>
                                            <span> Counter Attacks: {el.bossCounterAttacks}</span>
                                            <span> Boss Info: {el.bossInfo}</span>
                                        </div>
                                        :
                                        <BossForm preLoadedData={el} />}
                                </div>
                            </>
                        )
                    }) : <label className="tableLabel">No Boss Strategies? Git Gud</label>}
                </tbody>
                <tbody>
                    {areaLogs ? areaLogs.map(el => {
                        return (
                            <>
                                <label className="tableLabel" onClick={() => toggleLog(el.id)}>{el.areaName}</label>
                                <div className={selectedLog == el.id ? "openLog" : "hideLog"} key={el.id}>
                                    <div className="buttons">
                                        <button className="delete-btn"><FaTrash /></button>
                                        <button className="edit-btn" onClick={() => toggleEditMode()}></button>
                                        <button className="close-btn" onClick={() => toggleLog(el.id)}> <FaRegTimesCircle /></button>
                                    </div>
                                    {editMode == false ?
                                        <div className="logInfo">
                                            <span> Area: {el.areaName}</span>
                                            <span> Area Quirks: {el.areaQuirks}</span>
                                            <span> Common Enemies: {el.commonEnemies}</span>
                                            <span> Area Info: {el.areaInfo}</span>
                                        </div>
                                        :
                                        <AreaForm preLoadedData={el} />}
                                </div>
                            </>
                        )
                    }) : <label className="tableLabel">No Area Notes? Git Gud</label>}
                </tbody>
                <tbody>
                    {craftingLogs ? craftingLogs.map(el => {
                        return (
                            <>
                                <label className="tableLabel" onClick={() => toggleLog(el.id)}>{el.itemName}</label>
                                <div className={selectedLog == el.id ? "openLog" : "hideLog"} key={el.id}>
                                    <div className="buttons">
                                        <button className="delete-btn"><FaTrash /></button>
                                        <button className="edit-btn" onClick={() => toggleEditMode()}></button>
                                        <button className="close-btn" onClick={() => toggleLog(el.id)}> <FaRegTimesCircle /></button>
                                    </div>
                                    {editMode == false ?
                                        <div className="logInfo">
                                            <span> Item Name: {el.itemName}</span>
                                            <span> Crafting Recipe: {el.craftingRecipe}</span>
                                            <span> Material Locations: {el.materialLocations}</span>
                                            <span> Item Info: {el.itemInfo}</span>
                                        </div>
                                        :
                                        <CraftingForm preLoadedData={el} />}
                                </div>
                            </>
                        )
                    }) : <label className="tableLabel">No Crafting Recipes? Git Gud</label>}
                </tbody>
            </table>
        </>
    )
}

export default Organizer
