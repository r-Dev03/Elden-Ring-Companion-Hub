
import { useState } from "react";

const BossView= ({res}) => {
    return (
        <>
            <section className="data-info">
                <img className="data-img" src={res!= null || res != undefined ? res.image : "" }/>
            </section>
        </>
    )    
}
export default BossView
