import React from "react"

const CreatureView = ({res}) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Location: {res.Location} </p>
                    <p> Description: {res.description} </p>
                    <ul> Drops: {res.drops.map(item => {
                        return (
                            <li> {item} </li>
                        )
                    })}</ul>
                </section>
                : null}
        </>
    )    
}
export default CreatureView
