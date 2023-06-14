
import { useState } from "react";

const AmmoView= ({res}) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Description: {res.description} </p>
                    <p> Passive: {res.passive} </p>
                    <p> Type: {res.type} </p>
                </section>
                : null}
        </>
    )    
}
export default AmmoView
