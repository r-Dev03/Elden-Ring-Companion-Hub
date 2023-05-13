import { useState } from "react";

const BossForm = ({ preLoadedData }) => {
    const [bossName, setBossName] = useState(preLoadedData.bossName)
    const [bossType, setBossType] = useState(preLoadedData.bossType)
    const [bossInfo, setBossInfo] = useState(preLoadedData.bossInfo)
    const [bossAttackPatterns, setBossAttackPatterns] = useState(preLoadedData.bossAttackPatterns)
    const [bossCounterAttacks, setBossCounterAttacks] = useState(preLoadedData.bossCounterAttacks)



    const handleSubmit = (e) => {
        e.preventDefault()

        if (!bossName) {
            alert('Stop dying to bosses and strategize a little')
            return
        }

        bossLog({ bossName, bossType, bossInfo, bossAttackPatterns, bossCounterAttacks })

        setBossName('')
        setBossType('')
        setBossInfo('')
        setBossAttackPatterns('')
        setBossCounterAttacks('')
    }

    function bossLog() {

        if (localStorage.getItem('bossLogs')) {

        } else {
            console.log('Creating storage for boss strategies...')
            const bossLogs = []
            localStorage.setItem('bossLogs', JSON.stringify(bossLogs))
        }
        const id = String(Math.ceil(Math.random() * 999999))

        let boss = {
            id: id,
            bossName: bossName,
            bossType: bossType,
            bossAttackPatterns: bossAttackPatterns,
            bossCounterAttacks: bossCounterAttacks,
            bossInfo: bossInfo,
        }
        const log = JSON.parse(window.localStorage.getItem('bossLogs'))
        log.push(boss)
        window.localStorage.setItem('bossLogs', JSON.stringify(log))
    }

    return (
        <form className='form' id="boss-form" onSubmit={handleSubmit}>
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
            <textarea form='boss-form' placeholder='Starts off shooting gravitational arrows, scale up while summoning allies' value={bossInfo} onChange={(e) => setBossInfo(e.target.value)}>

            </textarea>
            <input type='submit' value='Save Boss Log' className='btn btn-block' />
        </form>
    )
}
export default BossForm
