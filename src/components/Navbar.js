import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar_container">
            <Link to={`/Bosses`}>
                <button className="button">
                    <span className="navsprite bosses"></span>
                    <span> Bosses </span>
                </button>
            </Link>
            <Link to={`/Areas`}>
                <button className="button">
                    <span className="navsprite areas"></span>
                    <span> Areas </span>
                </button>
            </Link>
            <Link to={`/Crafting`}>
                <button className="button">
                    <span className="navsprite crafting"></span>
                    <span> Crafting </span>
                </button>
            </Link>
            <Link to={`/CheatSheet`}>
                <button className="button">
                    <span className="navsprite paper"></span>
                    <span> Cheat Sheet</span>
                </button>
            </Link>
        </div>
    )
}

export default Navbar
