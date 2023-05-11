import React, { useState } from "react";

const Organizer = () => {
    const areaLogs = JSON.parse(window.localStorage.getItem('areaLogs'))
    const bossLogs = JSON.parse(window.localStorage.getItem('bossLogs'))
    const craftingLogs = JSON.parse(window.localStorage.getItem('craftingLogs'))
    const [showLog, setShowLog] = useState(false)

    function toggleLog() {
        setShowLog(!showLog)
    }

    //here is the return for the Organizer
    return (
        <>
            <div className="logsContainer">
                {bossLogs ? bossLogs.map(el => {
                    //here's the return for the loop
                    return (
                        <div className="bossLogsContainer" onClick={toggleLog}>
                            <div className={showLog ? "showLog" : "hideLog"} key={el.id}>
                                <p> Boss Name: {el.bossName}</p>
                                <p> Boss Type: {el.bossType}</p>
                                <p> Attack Patterns: {el.bossAttackPatterns}</p>
                                <p> Counter Attacks: {el.bossCounterAttacks}</p>
                                <p> Boss Info: {el.bossInfo}</p>
                            </div>
                        </div>
                    )
                }) : <p>No Boss Strategies? Git Gud</p>}

                {areaLogs ? areaLogs.map(el => {
                    return (
                        <div className="areaLogsContainer">
                            <div className="area" key={el.id}>
                                <p> Area Name: {el.areaName}</p>
                                <p> Area Quirks: {el.areaQuirks}</p>
                                <p> Common Enemies: {el.commonEnemies}</p>
                                <p> Area Info: {el.areaInfo}</p>
                            </div>
                        </div>
                    )
                }) : <p>No Area Notes? Git Gud</p>}

                {craftingLogs ? craftingLogs.map(el => {
                    return (
                        <div className="craftingLogsContainer">
                            <div className="item" key={el.id}>
                                <p> Item Name: {el.itemName}</p>
                                <p> Crafting Recipe: {el.craftingRecipe}</p>
                                <p> Material Locations: {el.materialLocations}</p>
                                <p> Item Info: {el.itemInfo}</p>
                            </div>
                        </div>
                    )
                }) : <p>No Crafting Recipes? Git Gud</p>}
            </div>
        </>
    )
}

export default Organizer
