import { useDispatch } from 'react-redux';
import style from './searchBar.module.css';
import { useState } from 'react';
import { getDogByName, removeFinder } from '../../redux/actions'

const SearchBar = () => {
   const dispatch = useDispatch()
   const [name, setName] = useState('');

   const handleChange = (event) => {
     setName(event.target.value)
   }
  
   const onSearch = (name) => {
      dispatch(getDogByName(name));
      setName("")
   }

   const handleRemove = () => {
      return dispatch(removeFinder())
  }

   return (
      <div  className={style.search}>
         <input placeholder='Insert Breed' className={style.input}type='search' onChange={handleChange} value={name}/>
         <button className={style.glowonhover} onClick={() =>{onSearch(name)}}>🔎</button>
         <button className={style.glowonhover} onClick={handleRemove}>Reset</button>
      </div>
   );
}

export default SearchBar;