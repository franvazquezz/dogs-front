import './App.css';
import Landing from './components/landing/landing.jsx';
import Form from './components/form/form.jsx'
import Detail from './components/detail/detail.jsx'
import Nav from './components/nav/nav.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'
import {Route, Routes, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs, getTemperaments } from './redux/actions';


function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
  dispatch(getDogs()), dispatch(getTemperaments())
  },[])
  const {pathname} = useLocation();
  return (
    <div className="App">
      {pathname !== '/' && <Nav/>}
      <Routes>
        <Route exact path='/' element = {<Landing/>}/>
        <Route exact path='/about' element = {<About/>}/>
        <Route exact path='/dogs' element = {<Home/>}/>
        <Route exact path='/create' element = {<Form/>}/>
        <Route exact path='/dogs?name=' element = {<Detail/>}/>
        <Route exact path='/dogs/:id' element = {<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
