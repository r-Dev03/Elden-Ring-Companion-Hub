import React from "react"
import PropTypes from 'prop-types'

const NPCView= ({ res }) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Location: {res.location} </p>
                    <p> Role: {res.role} </p>
                    <p> Quote: "{res.quote}" </p>
                </section>
                : null}
        </>
    )    
}
export default NPCView
