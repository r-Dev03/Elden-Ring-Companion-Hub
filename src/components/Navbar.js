import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar_container">
            <Link to={`/Bosses`}>
                <button className="button">
                    <span className="navsprite bosses"></span>
                    <span className='nav_text'> Bosses </span>
                </button>
            </Link>
            <Link to={`/Areas`}>
                <button className="button">
                    <span className="navsprite areas"></span>
                    <span className='nav_text'> Areas </span>
                </button>
            </Link>
            <Link to={`/Crafting`}>
                <button className="button">
                    <span className="navsprite crafting"></span>
                    <span className='nav_text'> Crafting </span>
                </button>
            </Link>
            <Link to={`/CheatSheet`}>
                <button className="button">
                    <span className="navsprite paper"></span>
                    <span className='nav_text'> Cheat Sheet</span>
                </button>
            </Link>
        </div>
    )
}

export default Navbar
