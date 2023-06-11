
import { useState } from "react";

const BossView= (res) => {
{res ? 
        Object.keys(res).map((key, i) => {
            console.log(res[key])
        })
        : console.log('error')}
    return (
        <>
            <h1 Boss info> </h1>
        </>
    )    
}
export default BossView
