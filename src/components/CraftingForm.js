
import { useState } from "react";

const CraftingForm = () => {

    const [itemName, setItemName] = useState('')
    const [craftingRecipe, setCraftingRecipe] = useState('')
    const [materialLocations, setMateralLocations] = useState('')
    const [itemInfo, setItemInfo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!itemInfo) {
            alert('Start crafting...')
            return
        }

        craftingLog({ itemName, craftingRecipe, itemInfo })

        setItemName('')
        setCraftingRecipe('')
        setMateralLocations('')
        setItemInfo('')
    }


    function craftingLog() {

        if (localStorage.getItem('craftingLogs')) {

        } else {
            console.log('Creating storage for crafting based strategies...')
            const craftingLogs = []
            localStorage.setItem('craftingLogs', JSON.stringify(craftingLogs))
        }
        const id = String(Math.ceil(Math.random() * 999999))

        let item = {
            'id': id,
            'itemName': itemName,
            'craftingRecipe': craftingRecipe,
            'materialLocations': materialLocations,
            'itemInfo': itemInfo,
        }

        const log = JSON.parse(window.localStorage.getItem('craftingLogs'))
        log.push(item)
        window.localStorage.setItem('craftingLogs', JSON.stringify(log))
    }


    return (
        <form className='form' id="crafting-form" onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Item Name</label>
                <input
                    type='text'
                    placeholder='Rope Bombs'
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Crafting Recipe</label>
                <input
                    type='text'
                    placeholder='Crafting Recipe'
                    value={craftingRecipe}
                    onChange={(e) => setCraftingRecipe(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Material Locations</label>
                <input
                    type='text'
                    placeholder='Limgrave'
                    value={materialLocations}
                    onChange={(e) => setMateralLocations(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Item Info</label>
            </div>
            <textarea form='crafting-form' placeholder='Found near Liurnia of Lakes' value={itemInfo} onChange={(e) => setItemInfo(e.target.value)}>

            </textarea>
            <input type='submit' value='Save Crafting Log' className='btn btn-block' />
        </form>
    )
}
export default CraftingForm
