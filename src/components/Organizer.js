import React from "react";

const Organizer = () => {
    const areaLogs = JSON.parse(window.localStorage.getItem('areaLogs'))
    const bossLogs = JSON.parse(window.localStorage.getItem('bossLogs'))
    const craftingLogs = JSON.parse(window.localStorage.getItem('craftingLogs'))

    //here is the return for the Organizer
    return (
        <>
            <div className="logsContainer">
                {bossLogs ? bossLogs.map(el => {
                    //here's the return for the loop
                    return (
                        <div className="bossLogsContainer">
                            <div key={el.id}>
                                <p>{el.bossName}</p>
                                <p>{el.bossType}</p>
                                <p>{el.bossAttackPatterns}</p>
                                <p>{el.bossCounterAttacks}</p>
                                <p>{el.bossInfo}</p>
                            </div>
                        </div>
                    )
                }) : <p>No Boss Strategies? Git Gud</p>}

                {areaLogs ? areaLogs.map(el => {
                    return (
                        <div className="areaLogsContainer">
                            <div key={el.id}>
                                <p>{el.areaName}</p>
                                <p>{el.areaQuirks}</p>
                                <p>{el.commonEnemies}</p>
                                <p>{el.areaInfo}</p>
                            </div>
                        </div>
                    )
                }) : <p>No Area Notes? Git Gud</p>}

                {craftingLogs ? craftingLogs.map(el => {
                    return (
                        <div className="craftingLogsContainer">
                            <div key={el.id}>
                                <p>{el.itemName}</p>
                                <p>{el.craftingRecipe}</p>
                                <p>{el.materialLocations}</p>
                                <p>{el.itemInfo}</p>
                            </div>
                        </div>
                    )
                }) : <p>No Crafting Recipes? Git Gud</p>}
            </div>
        </>
    )
}

export default Organizer
