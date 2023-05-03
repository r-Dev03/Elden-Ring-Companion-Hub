import React from "react";

const Organizer = () => {
    const bosses = JSON.parse(window.localStorage.getItem('bossLogs'))
    //Testing options in regards to rendering multiple elements and mapping through 3 different arrays.
    Object.keys(localStorage).map(logType => {
        JSON.parse(window.localStorage.getItem(logType)).map(el => {
            console.log(el)
        })
    })

    //here is the return for the Organizer
    return (
        <>
            {bosses.map(el => {
                //here's the return for the loop
                return (
                    <div key={el.id}>
                        <p>{el.bossName}</p>
                        <p>{el.bossType}</p>
                        <p>{el.bossAttackPatterns}</p>
                        <p>{el.bossCounterAttacks}</p>
                        <p>{el.bossInfo}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Organizer
