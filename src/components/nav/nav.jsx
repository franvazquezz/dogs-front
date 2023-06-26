import SearchBar from "../searchBar/searchBar.jsx";
import style from "./nav.module.css"
import {Link, NavLink} from 'react-router-dom'
import creative from '../../../assets/creative.png'

const Nav = () => {
    return (
        <div className= {style.nav}>
            <Link to='/dogs'>
            <button className={style.glowonhover}>Home</button>
            </Link>
            <NavLink to='/create'>
            <button className={style.glowonhover}>Add Breed</button>
            </NavLink>
            <SearchBar/>
            <Link to='/about'>
            <button className={style.glowonhover}>About</button>
            </Link>
            <Link to='/'>
            <button className={style.glowonhover}>Log Out</button>
            </Link>
            <Link to='/dogs'>
            <img className={style.img} src={creative} alt=""/>
            </Link>
            </div>
    )
}

export default Nav;