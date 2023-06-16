import { useState} from "react";
import React from "react";
import axios from "axios";
import BossView from "./views/BossView"
import AmmoView from "./views/AmmoView";
import ArmorView from "./views/ArmorView";
import AshView from "./views/AshView";
import ClassView from "./views/ClassView";
import CreatureView from "./views/CreatureView";
import IncantationView from "./views/IncantationView";
import ItemView from "./views/ItemView";
import LocationView from "./views/LocationView";
import NPCView from "./views/NPCView";
import ShieldView from "./views/ShieldView";
import SorceryView from "./views/SorceryView";
import SpiritView from "./views/SpiritView";
import TalismanView from "./views/TalismanView";
import WeaponView from "./views/WeaponView";

const CheatSheet = () => {
    const [inputValue, setInputValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('ammos')
    const [responseData, setResponseData] = useState(null)




    const fetchAndFilter = async (inputVal) => {
        try {
            const res = await axios.get(`https://eldenring.fanapis.com/api/${categoryValue}?limit=100`);
            console.log(res.data.data);
            const filteredData = res.data.data.filter(obj => obj.name.toLowerCase().includes(inputVal.toLowerCase()));
            console.log(filteredData);
            setResponseData(filteredData[0])
        } catch (error) {
            // Handle error
            console.error(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!inputValue) {
            alert('Your gonna need it...')
            return
        }
        await fetchAndFilter(inputValue)
        setInputValue('')

    }
    return (
        <div>
        <form className='form' id="cheat-form" onSubmit={handleSubmit}>
            <div className='form-control'>

                <label htmlFor="Type">Category</label>

                <select name="Category" id="Categories" required value = {categoryValue} onChange = {(e) => setCategoryValue(e.target.value)}> 
                    <option value="ammos">Ammos</option>
                    <option value="armors">Armors</option>
                    <option value="ashes">Ashes of War</option>
                    <option value="bosses">Bosses</option>
                    <option value="classes">Classes</option>
                    <option value="creatures">Creatures</option>
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

                <label className="search">Search Elden Ring Info</label>
                <input
                    type='text'
                    placeholder='location, boss, items...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />


                <input type='submit' value='Search' className='btn btn-block' />
            </div>
        </form>
            <div className="data">

                {categoryValue === 'ammos' && <AmmoView res={responseData} />}
                {categoryValue === 'armors' && <ArmorView res={responseData} />}
                {categoryValue === 'ashes' && <AshView res={responseData} />}
                {categoryValue === 'bosses' && <BossView res={responseData} />}
                {categoryValue === 'classes' && <ClassView res={responseData} />}
                {categoryValue === 'creatures' && <CreatureView res={responseData} />}
                {categoryValue === 'incantations' && <IncantationView res={responseData} />}
                {categoryValue === 'items' && <ItemView res={responseData} />}
                {categoryValue === 'locations' && <LocationView res={responseData} />}
                {categoryValue === 'npcs' && <NPCView res={responseData} />}
                {categoryValue === 'shields' && <ShieldView res={responseData} />}
                {categoryValue === 'sorceries' && <SorceryView res={responseData} />}
                {categoryValue === 'spirits' && <SpiritView res={responseData} />}
                {categoryValue === 'talismans' && <TalismanView res={responseData} />}
                {categoryValue === 'weapons' && <WeaponView res={responseData} />}

            </div>

        </div>

    )
}
export default CheatSheet
