import { useState } from "react";

const AreaForm = ({ AreaLog }) => {

    const [areaName, setAreaName] = useState('')
    const [areaQuirks, setAreaQuirks] = useState('')
    const [commonEnemies, setCommonEnemies] = useState('')
    const [areaInfo, setAreaInfo] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!areaInfo) {
            alert('Stop sucking and explore the area a bit!')
            return
        }

        AreaLog({ areaName, areaQuirks, areaInfo})

        setAreaName('')
        setAreaQuirks('')
        setCommonEnemies('')
        setAreaInfo('')
    }

    return (
        <form className='form' id="area-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Area Name</label>
                <input
                    type='text'
                    placeholder='Limgrave'
                    value={areaName}
                    onChange={(e) => setAreaName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Area Quirks</label>
                <input
                    type='text'
                    placeholder='Vast and open area, with common ruins placed around.'
                    value={areaQuirks}
                    onChange={(e) => setAreaQuirks(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Common Enemies</label>
                <input
                    type='text'
                    placeholder='Skeletons'
                    value={commonEnemies}
                    onChange={(e) => setCommonEnemies(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Area Info</label>
            </div>
            <textarea form='area-form' placeholder='Windy area, merchants are placed around as well as evergaols and bell bearing hunters' value={areaInfo} onChange={(e) => setAreaInfo(e.target.value)}>

            </textarea>
            <input type='submit' value='Save Area Log' className='btn btn-block' />
        </form>
    )
}
export default AreaForm
