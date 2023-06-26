import style from './detail.module.css'
import { useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {removeDetails, getDogById} from '../../redux/actions.js'

const Detail = () =>{
    const dispatch = useDispatch()
    const {details} = useSelector(state => state)
    const {id} = useParams();
    const handleRemove = () => {
        return dispatch(removeDetails())
    }
    useEffect(()=>{
        dispatch(getDogById(id))
    }, [dispatch, id])
    return (
        <div className={style.main}>
            <div className={style.carta}>
                <Link to={`/dogs`}>
                <button className={style.back} onClick={handleRemove}>Back</button>
                </Link>
                <br></br>
                {details.map((dog, index) => {
                    return( <div key={index}>
                    <img className={style.img}src={dog.img }/>
                    <h1 className={style.name}> {dog.name}</h1>
                    <h3 className={style.status}> Life span: {dog.createdInDb ? `${dog.life_span} years`: dog.life_span ? dog.life_span : 'No data available'}</h3>
                    <h3 className={style.status}> Weight: {dog.weight_min && (dog.weight_min)} - {dog.weight_max && dog.weight_max} kg</h3>
                    <h3 className={style.status}> Height: {dog.height_min && dog.height_min} - {dog.height_max && dog.height_max} cm</h3>
                    <h3 className={style.status}> Temperaments: {dog.createdInDb ? dog.temperaments && dog.temperaments.map(ele =>` ${ele.name}`).toString(): dog.temperaments && dog.temperaments}</h3>
                    </div>
                    )
                })}
                <Link to={`/dogs`}>
                <button className={style.back}>Back</button>
                </Link>
            </div>
        </div>
    );
};


export default Detail;