import React from "react"
import PropTypes from 'prop-types'

const LocationView= ({ res }) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Description: {res.description} </p>
                </section>
                : null}
        </>
    )    
}
export default LocationView
