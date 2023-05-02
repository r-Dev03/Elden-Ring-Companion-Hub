import React from "react";

const Organizer = () => {

    const bosses = JSON.parse(window.localStorage.getItem('bossLogs'))
    console.log(bosses)

        bosses.forEach(el => {
            return (
            <>
            <p>{el.bossName}</p>
            </>
            )
        })

}

export default Organizer
