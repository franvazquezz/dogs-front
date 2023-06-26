import { getTemperaments, getDogs, postDogs } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './form.module.css'


const Form = () =>{
    const dispatch =useDispatch();
    useEffect(()=>{dispatch(getTemperaments())}, [dispatch]);
    const {allTemperaments, allDogs} = useSelector(state => state);
    const [userData, setUserData] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span: '',
        temperaments: [],
        img: 'https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop',
        createdInDb: true,
    });

    const handlerTemps = (event) => {
        const add = (e) => {
            if(userData.temperaments.includes(e.target.value)){
                return [...userData.temperaments];
            } else {
                return [...userData.temperaments, e.target.value];
            }
        }
        setUserData({
            ...userData,
            temperaments :add(event),
        });
    };

    const handleDeleteTemp = (e) =>{
        setUserData({
            ...userData,
            temperaments: userData.temperaments.filter(temp => temp !== e)
        })
    }

    const [errors, setErrors] = useState({});

    useEffect(()=> {
        setErrors(validation(userData))
    }, [userData])
    
    const validation = (data) => {
        let errors = {};
        !data.name && (errors.name = "Name is required");
        !data.weight_min && (errors.weight_min = "Min weight is required");
        !data.weight_max && (errors.weight_max = "Max weight is required");
        parseInt(data.weight_max) < parseInt(data.weight_min) && (errors.weight_min = "Min weight has to be smaller than max weight");
        !data.height_min && (errors.height_min = "Min height is required");
        !data.height_max && (errors.height_max = "Max height is required");
        parseInt(data.height_max) < parseInt(data.height_min) &&( errors.height_min = "Min height has to be smaller than max height");
        !data.life_span && (errors.life_span = "Life span is required");
        data.temperaments.length === 0 && (errors.temperaments = "At least one temperament is required");
        return errors
    }

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
        console.log(userData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postDogs(userData));
        dispatch(getDogs())
        setUserData({
            name: '',
            height_min: '',
            height_max: '',
            weight_min: '',
            weight_max: '',
            life_span: '',
            temperaments: [],
            img: '',
            createdInDb: true,
        })
        alert(`The new breed ${userData.name} has been created successfully`);
    }
    return (
        <div className={style.todo}>
            <h1>Create a new breed</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.izq}>
                    <h4>Name</h4>
                    <label htmlFor="name"></label>
                    <input className={style.input} placeholder='e.g. Caniche Toy' type="text" required={true}onChange={handleChange} value={userData.name} name="name"/>
                    {errors.name ? (<p>{errors.name}</p>) : (<br></br>)}
                </div>
                <div className={style.der}>
                    <h4>Weight in kg</h4>
                    <label htmlFor="weight"></label>
                    <input className={style.input} name="weight_min" type="number" placeholder="Min weight" value={userData.weight_min} autoComplete="off" required={true} onChange={handleChange}/>
                    <input className={style.input} name="weight_max" type="number" placeholder="Max weight" value={userData.weight_max} autoComplete="off" required={true} onChange={handleChange}/>
                    {errors.weight_min && (<p>{errors.weight_min}</p>)}
                    {errors.weight_max && (<p>{errors.weight_max}</p>)}
                </div>
                <div className={style.der}>
                    <h4>Height in cm</h4>
                    <label htmlFor="height"></label>
                    <input className={style.input} name="height_min" type="number" placeholder="Min height" value={userData.height_min} autoComplete="off" required={true} onChange={handleChange}/>
                    <input className={style.input} name="height_max" type="number" placeholder="Max height" value={userData.height_max} autoComplete="off" required={true} onChange={handleChange}/>
                    {errors.height_min && (<p>{errors.height_min}</p>)}
                    {errors.height_max && (<p>{errors.height_max}</p>)}
                </div>
                <div className={style.izq}>
                    <h4>Life span in years</h4>
                    <label htmlFor="life_span"></label>
                    <input className={style.input} name="life_span" type="number" placeholder="Life span" value={userData.life_span} autoComplete="off" required={true} onChange={handleChange}/>
                    {errors.life_span && (<p>{errors.life_span}</p>)}
                </div>
                <div className={style.izq}>
                    <h4>Choose an image or paste an url</h4>
                    <img className={style.random}src="https://img.freepik.com/premium-vector/simple-minimalist-cartoon-cute-dog-logo_68410-146.jpg" alt=''/>
                    <img className={style.random}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4hZmwHc1nwzFI0ordY93atFok5Ls8n6glA" alt=""/>
                    <img className={style.random}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSMS0h2LRWJ_xR6ik3sQ-pS7DwnMVizCbyw" alt=""/>
                    <img className={style.random}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavCkgCVj2kOFj2vb0sUY5S_bW5MLAK-MiJXNF2dOZK9vL7twl8ECe0FyUkukiBuOZyGI" alt=""/>
                </div>
                <div className={style.checkboxdiv}>
                    <input name="img" type="radio" value={"https://img.freepik.com/premium-vector/simple-minimalist-cartoon-cute-dog-logo_68410-146.jpg"} onClick={handleChange}/>
                    <input name="img" type="radio" value={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4hZmwHc1nwzFI0ordY93atFok5Ls8n6glA"} onChange={handleChange}/>
                    <input name="img" type="radio" value={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSMS0h2LRWJ_xR6ik3sQ-pS7DwnMVizCbyw"} onChange={handleChange}/>
                    <input name="img" type="radio" value={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavCkgCVj2kOFj2vb0sUY5S_bW5MLAK-MiJXNF2dOZK9vL7twl8ECe0FyUkukiBuOZyGI"} onChange={handleChange}/>
                </div>
                <label htmlFor="img"> Url: </label>
                    <input className={style.input} name="img" onChange={handleChange}></input>
                <div className={style.izq}>
                    <h4>Temperaments:</h4>
                    <label htmlFor="temperaments"></label>
                    <select className={style.select} onChange={e => handlerTemps(e)}>
                        {
                            allTemperaments?.map((item, index)=>{
                                return (
                                    <option value={item} key={index}>{item}</option>
                                )
                        })
                    }
                    </select>
                    <div className={style.array}>
                    {
                        userData.temperaments?.map(item => {
                            return (<div key={item}>
                                <p>{item}</p>
                                <button onClick={() => {handleDeleteTemp(item)}}>❌</button>
                            </div>)
                        })
                        
                    }
                    </div>
                    <p>{errors.temperaments && errors.temperaments}</p>
                </div>
                <div className={style.izq}>
                    {!errors.name && !errors.weight_min && !errors.weight_max && !errors.height_min && !errors.height_max &&  !errors.life_span && !errors.temperaments? <button type="submit">Create</button> : 'Complete data'}
                </div>
            </form>
        </div>
    );
};


export default Form;