import { useState, useEffect} from "react";
import axios, { Axios } from "axios";
import BossView from "./BossView";

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
                return <p> Ammos stuff </p>
            case 'armors': 
                return <p> Armor stuff </p>
            case 'ashes': 
                return <p> Ashes stuff </p>
            case 'bosses': 
                return <BossView res = {responseData} />
            case 'classes': 
                return <p> Classes stuff </p>
            case 'creatures': 
                return <p> Creatures stuff </p>
            case 'incantations': 
                return <p> Incantation stuff </p>
            case 'items': 
                return <p> Items stuff </p>
            case 'locations': 
                return <p> Location stuff </p>
            case 'npcs': 
                return <p> NPC stuff </p>
            case 'shields': 
                return <p> Shield stuff </p>
            case 'sorceries': 
                return <p> Sorcery stuff </p>
            case 'spirits': 
                return <p> Spirit stuff </p>
            case 'talismans': 
                return <p> Talisman stuff </p>
            case 'weapons': 
                return <p> Weapons stuff </p>
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
