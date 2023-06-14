
import { useState } from "react";

const IncantationView= ({res}) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Type: {res.type} </p>
                    <p> Slots: {res.slots} </p>
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
export default IncantationView
