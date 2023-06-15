

import { useState } from "react";

const WeaponView= ({res}) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Category: {res.category} </p>
                    <p> Weight: {res.weight} </p>
                    <p> Effects: {res.effects} </p>
                    <p> Description: {res.description} </p>
                    <ul> Attack: 
                        {res.attack.map(el => {
                            return (
                            <li> {el.amount} {el.name}</li>
                            )
                        })}
                    </ul>
                    <ul> Defence: 
                        {res.defence.map(el => {
                            return (
                            <li> {el.amount} {el.name}</li>
                            )
                        })}
                    </ul>
                    <ul> Scales With: 
                        {res.scalesWith.map(el => {
                            return (
                            <li> {el.name} {el.scaling}</li>
                            )
                        })}
                    </ul>
                </section>
                : null}
        </>
    )    
}
export default WeaponView
