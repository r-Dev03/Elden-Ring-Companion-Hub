import React from "react";
import { useState } from "react";

const CheatSheet = () => {
    const [inputValue, setInputValue] = useState('')

    function searchInfo() {
        console.log(inputValue)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!inputValue) {
            alert('Your gonna need it...')
            return
        }

        searchInfo({ inputValue })

        setInputValue('')
    }
    return (
        <form className='form' id="cheat-form" onSubmit={handleSubmit}>
            <div className='form-control'>

                <label for="Type">Category</label>

                <select name="Category" id="Categories" required>
                    <option value="ammos">Ammos</option>
                    <option value="armors">Armors</option>
                    <option value="ashes of war">Ashes of War</option>
                    <option value="bosses">Bosses</option>
                    <option value="classes">Classes</option>
                    <option value="incantations">Incantations</option>
                    <option value="items">Items</option>
                    <option value="locations">Locations</option>
                    <option value="npcs">NPCs</option>
                    <option value="shields">Shields</option>
                    <option value="sorceries">Sorceries</option>
                    <option value="spirits">Spirits</option>
                    <option value="talismans">Talismans</option>
                    <option value="weapons">Weapons</option>
                </select>

                <label>Search Elden Ring Info</label>
                <input
                    type='text'
                    placeholder='location, boss, items...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />


                <input type='submit' value='Search' className='btn btn-block' />
            </div>
        </form>
    )
}

export default CheatSheet
