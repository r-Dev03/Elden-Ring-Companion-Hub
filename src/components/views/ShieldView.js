import { useState } from "react";

const ShieldView= ({res}) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Description: {res.description} </p>
                    <p> Category: {res.category} </p>
                    <p> Weight: {res.weight} </p>
                    <p> Weight: {res.weight} </p>
                    <ul> Attack: 
                        {res.attack.map(el => {
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
export default ShieldView
