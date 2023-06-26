import {Link} from 'react-router-dom'
import style from './landing.module.css'
import show from '../../../assets/show.png'
import landing from '../../../assets/landing.jpg'
import creative from '../../../assets/creative.png'
const Landing = () => {
  return (
    <div className={style.landing}>
      <img className={style.fotito} src={creative}/>
      <br></br>
      <Link to='/dogs'><img className={style.show} src={show} alt=""/></Link>
      <br></br>
      <img className={style.fotito} src={landing} alt="" />
    </div>
  );
}

export default Landing;
