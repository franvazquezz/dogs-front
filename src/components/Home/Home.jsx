import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import style from './Home.module.css'
import { getDogs, getTemperaments, filterCards, filterByOrigin, orderCardsName, orderCardsWeight} from '../../redux/actions';
import Pagination from '../Pagination/pagination';



const Home = () =>{
   const dispatch = useDispatch();
   const {allTemperaments, allDogs, dogFinder} = useSelector(state => state);
   //paginado
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPage, setPostsPage] = useState(8);
   const lastPostIndex = currentPage * postsPage;
   const firstPostIndex = lastPostIndex - postsPage;
   let currentPosts = allDogs.slice(firstPostIndex, lastPostIndex);
   useEffect(()=>{
      currentPosts = allDogs.slice(firstPostIndex, lastPostIndex);
      setCurrentPage(1);
   }, [allDogs])
   //orden
   const [aux, setAux] = useState(false);//re-renderiza
   const handleOrderName = (event)=>{
      dispatch(orderCardsName(event.target.value));
      setAux(!aux);
   }
   const handleOrderWeight = (event)=>{
      dispatch(orderCardsWeight(event.target.value));
      setAux(!aux);
   }
   //filtros
   const handleFilter = (event)=>{
      dispatch(filterCards(event.target.value));
   }
   const handleFilterOrigin = (e)=>{
      dispatch(filterByOrigin(e.target.value));
   }
   return (
   <div className={style.cont} >
      <h1>Home God</h1>
      <div> 
         <div className={style.filter}>
         <h2 className={style.h2}>Filter & Order</h2>
         <h3>Filter by: </h3>
         <h4>Origin </h4>
         <select className={style.select} name="origin" id="" onChange={handleFilterOrigin}>
            <option value="Any">Any</option>
            <option value="Api">Default</option>
            <option value="DataBase">Created</option>
         </select>
         <h4>Temperament</h4>
         <select className={style.select} onChange={handleFilter}>
            <option value="Any">Any</option>
         {allTemperaments.map((item, index)=> {
            return (
               <option key={index}value={item}>{item}</option>
            )
         })}
         </select>
         <hr/>
         <h3>Order by: </h3>
         <h4>Name</h4>
         <select className={style.select} onChange={handleOrderName}>
            <option className={style.option}value="A" hidden>Order</option>
            <option value="A">Ascending order</option>
            <option value="desc">Descending order</option>
         </select>
         <h4>Weight</h4>
         <select className={style.select} onChange={handleOrderWeight}> 
            <option value="all" hidden>Order</option>
            <option value="A">Lightest to heaviest</option>
            <option value="high">Heaviest to lightest</option>
         </select>
         </div>
      </div>
      <div className={style.container}>
         {dogFinder.length > 0? dogFinder.map(({id, name, height_min, height_max, weight_min, weight_max, life_span, temperaments, img}) => {
            return (
               <Card
               key={id}
               id = {id}
               name = {name}
               height_min = {height_min}
               height_max = {height_max}
               weight_min = {weight_min}
               weight_max = {weight_max}
               life_span = {life_span}
               img = {img}
               temperaments = {temperaments}
               />
               )}) :
         currentPosts.map(({id, name, height_min, height_max, weight_min, weight_max, life_span, temperaments, img})=>{
            return (
               <Card 
               key={id}
               id = {id}
               name = {name}
               height_min = {height_min}
               height_max = {height_max}
               weight_min = {weight_min}
               weight_max = {weight_max}
               life_span = {life_span}
               img = {img}
               temperaments = {temperaments}
               />
           )
         })
      }
      </div>
      <Pagination totalPosts={allDogs.length} setCurrentPage= {setCurrentPage} postsPage={postsPage}/>
   </div>
   )
}

export default Home;