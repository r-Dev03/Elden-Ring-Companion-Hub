import React from "react"

const BossView= ({res}) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Region: {res.region} </p>
                    <p> Location: {res.location} </p>
                    <p> Description: {res.description} </p>
                    <ul> Drops: {res.drops.map(item => {
                        return (
                            <li> {item} </li>
                        )
                    })}</ul>
                    <p> Health Points: {res.healthPoints} </p>
                </section>
                : null}
        </>
    )    
}
export default BossView
