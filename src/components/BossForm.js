import { useState } from "react";

const BossForm = ({ BossLog }) => {
    const [bossName, setBossName] = useState('')
    const [bossType, setBossType] = useState('')
    const [bossInfo, setBossInfo] = useState('')
    const [bossAttackPatterns, setBossAttackPatterns] = useState('')
    const [bossCounterAttacks, setBossCounterAttacks] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!bossName) {
            alert('Stop dying to bosses and strategize a little')
            return
        }

        BossLog({ bossName, bossType, bossInfo, bossAttackPatterns, bossCounterAttacks})

        setBossName('')
        setBossType('')
        setBossInfo('')
        setBossAttackPatterns('')
        setBossCounterAttacks('')
    }

    return (
        <form className='form'  id="boss-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Boss Name</label>
                <input
                    id='bossName'
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
                <label>Attack Patterns</label>
                <input
                    type='text'
                    placeholder='Three Attacks, jumps afterwards'
                    value={bossAttackPatterns}
                    onChange={(e) => setBossAttackPatterns(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>How to combat</label>
                <input
                    type='text'
                    placeholder='Dodge towards the swings and create distance before slam'
                    value={bossCounterAttacks}
                    onChange={(e) => setBossCounterAttacks(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Boss Info</label>
            </div>
        <textarea  form='boss-form' placeholder='Starts off shooting gravitational arrows, scale up while summoning allies' value={bossInfo} onChange = {(e) => setBossInfo(e.target.value)}>

        </textarea>
            <input type='submit' value='Save Boss Log' className='btn btn-block' />
        </form>
    )
}
export default BossForm
