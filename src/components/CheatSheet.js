import { useState, useEffect} from "react";
import axios, { Axios } from "axios";

const CheatSheet = () => {
    const [inputValue, setInputValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('ammos')
    const [responseData, setResponseData] = useState(null)

    
       const fetchData =  () => {
        axios.get(`https://eldenring.fanapis.com/api/${categoryValue}?name=${inputValue}`)
            .then(res => {
                setResponseData(res.data.data)
                console.log(responseData)
            }) 
            .catch(err => {
                console.log(err)
            })

    }



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
            <img className="data-img" src={responseData != null || responseData != undefined ? responseData.image : ""}/>
            <section className="data-info">
                    {responseData ? 
                        Object.keys(responseData).map((key, i) => {
                            if(Array.isArray(responseData[key]) == true) {
                                responseData[key] = [...responseData[key]]
                            }
                        return (
                        <>
                            <p key={i}> {key} : {responseData[key]}</p>
                        </>
                        )
                    }): <p> Please try to be more specific with your search </p>}
                        
                </section>
            </div>

        </div>

    )
}
export default CheatSheet
