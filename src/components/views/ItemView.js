import React from "react"
import PropTypes from 'prop-types'

const ItemView = ({ res }) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Type: {res.type} </p>
                    <p> Effect: {res.effect} </p>
                    <p> Description: {res.description} </p>
                </section>
                : null}
        </>
    )    
}
export default ItemView
