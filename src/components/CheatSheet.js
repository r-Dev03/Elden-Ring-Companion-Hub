import { useState, useEffect} from "react";
import axios, { Axios } from "axios";

const CheatSheet = () => {
    const [inputValue, setInputValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('Ammos')
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

    function filterByValue(array, string) {
        return array.filter(obj =>
            Object.keys(obj).some(k => obj[k].toLowerCase().includes(string.toLowerCase())));
    }

    const fetchDataAlternate = () => {
        axios.get(`https://eldenring.fanapis.com/api/${categoryValue}`)
        .then(res => {
                const results = res.data.data.filter((obj)=>{
                    return Object.keys(obj).reduce((acc, curr)=>{
                        return acc || obj[curr].toLowerCase().includes(inputValue);
                    }, false);
                });
                console.log(results)
                setResponseData(res.data.data)
                console.log(responseData)
            })
            .catch(err => {
                console.log(err)
            })
    }




    const handleSubmit = (e) => {
        e.preventDefault()

        if (!inputValue) {
            alert('Your gonna need it...')
            return
        }
        console.log()
        fetchData()
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
                    <option value="ashes of war">Ashes of War</option>
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
            <img className="data-img" src={responseData ? responseData[0].image : ""}/>
            <section className="data-info"></section>
            </div>

        </div>

    )
}
export default CheatSheet
