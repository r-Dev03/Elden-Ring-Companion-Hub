import React from "react"

const TalismanView= ({res}) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Effect: {res.effect} </p>
                    <p> Description: {res.description} </p>
                </section>
                : null}
        </>
    )    
}
export default TalismanView
