
const ClassView= ({res}) => {
    return (
        <>
            {res ?  
                <section className="data-info">
                    <img className="data-img" src={res.image} alt = "img"/>
                    <p> Name: {res.name} </p>
                    <p> Description: {res.description} </p>
                    <ul>
                        Stats: 
                        <li> Level: {res.stats.level} </li>
                        <li> Vigor: {res.stats.vigor} </li>
                        <li> Mind: {res.stats.mind} </li>
                        <li> Endurance: {res.stats.endurance} </li>
                        <li> Strength: {res.stats.strength} </li>
                        <li> Dexterity: {res.stats.dexterity} </li>
                        <li> Inteligence: {res.stats.inteligence} </li>
                        <li> Faith: {res.stats.faith} </li>
                        <li> Arcane: {res.stats.arcane} </li>
                    </ul>
                </section>
                : null}
        </>
    )    
}
export default ClassView
