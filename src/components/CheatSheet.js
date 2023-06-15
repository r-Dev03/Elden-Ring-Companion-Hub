import { useState, useEffect} from "react";
import axios, { Axios } from "axios";
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
            Object.keys(responseData).map((key, i) => {
                console.log(key)
                console.log(responseData[key])
            })
        } catch (error) {
            // Handle error
            console.error(error);
        }
    }
    
    const renderView  = () => {
        switch (categoryValue) {
            case 'ammos': 
                return <AmmoView res = {responseData}/>
            case 'armors': 
                return <ArmorView res = {responseData}/>
            case 'ashes': 
                return <AshView res = {responseData}/>
            case 'bosses': 
                return <BossView res = {responseData} />
            case 'classes': 
                return <ClassView res = {responseData}/>
            case 'creatures': 
                return <CreatureView res = {responseData}/>
            case 'incantations': 
                return <IncantationView res = {responseData}/>
            case 'items': 
                return <ItemView res = {responseData}/>
            case 'locations': 
                return <LocationView res = {responseData}/>
            case 'npcs': 
                return <NPCView res = {responseData}/>
            case 'shields': 
                return <ShieldView res = {responseData}/>
            case 'sorceries': 
                return <SorceryView res={responseData}/>
            case 'spirits': 
                return <SpiritView res={responseData}/>
            case 'talismans': 
                return <TalismanView res={responseData}/>
            case 'weapons': 
                return <WeaponView res={responseData}/>
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

                    {renderView()} 
                    
            </div>

        </div>

    )
}
export default CheatSheet
