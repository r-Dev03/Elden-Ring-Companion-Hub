import React from "react"
import PropTypes from 'prop-types'

const SorceryView= ({ res }) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Type: {res.type} </p>
                    <p> Slots: {res.slots} </p>
                    <p> Cost: {res.cost} </p>
                    <p> Effects: {res.effects} </p>
                    <p> Description: {res.description} </p>
                    <ul> Requires: 
                        {res.requires.map(el => {
                            return (
                            <li> {el.amount} {el.name}</li>
                            )
                        })}
                    </ul>
                </section>
                : null}
        </>
    )    
}
export default SorceryView
