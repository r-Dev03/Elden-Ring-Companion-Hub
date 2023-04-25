import React from "react";
import { useState } from "react";

const BossForm = ({ BossLog }) => {
    const [bossName, setBossName] = useState('')
    const [bossType, setBossType] = useState('')
    const [bossInfo, setBossInfo] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!bossInfo) {
            alert('Stop dying to bosses and strategize a little')
            return
        }

        BossLog({ bossName, bossType, bossInfo})

        setBossName('')
        setBossType('')
        setBossInfo('')
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Boss Name</label>
                <input
                    type='text'
                    placeholder='Radahn'
                    value={bossName}
                    onChange={(e) => setBossName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Boss Type</label>
                <input
                    type='text'
                    placeholder='Melee'
                    value={bossType}
                    onChange={(e) => setBossType(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Boss Info</label>
                <input
                    type='text'
                    placeholder='Three attack waves, Jumps after'
                    value={bossInfo}
                    onChange={(e) => setBossInfo(e.target.value)}
                />
            </div>
            <input type='submit' value='Save Boss Log' className='btn btn-block' />
        </form>
    )
}
export default BossForm
