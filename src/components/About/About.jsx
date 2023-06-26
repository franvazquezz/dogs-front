import Card from '../Card/Card'
import  pancho from '../../../assets/pancho.jpg'
import  maylo from '../../../assets/maylo.jpg'
import  luna from '../../../assets/luna.jpg'
import  chueco from '../../../assets/chueco.jpg'
import style from './About.module.css';

const About = () => {
    return (
        <div className={style.fondo}>
            <h1 className={style.pancho} >Francisco Vazquez</h1>
            <div className={style.info}>
            <div className={style.text}>
                <p>This is my first project, very excited about my future, interested on keep learning and growing as a developer.
                <br></br><span> Full Stack Web Developer Henry student</span></p> 
            </div>
            <img className={style.foto} src={pancho} alt=''></img>
            </div>
            <div className={style.dogs}>
            <h3 className={style.pancho}>These are my dogs</h3>
            </div>
            <div className={style.cards}>
            <Card className={style.card}
               id = {333}
               name = {'Maylo'}
               height_min = {15}
               height_max = {22}
               weight_min = {12}
               weight_max = {17}
               life_span = {16}
               img = {maylo}
               temperaments = {['Athletic, Brave, Jealous, Energetic, Loyal, Playful']}
            />
            <Card className={style.card}
               id = {333}
               name = {'Luna'}
               height_min = {20}
               height_max = {27}
               weight_min = {16}
               weight_max = {22}
               life_span = {15}
               img = {luna}
               temperaments = {['Calm, Cautious, Protective, Lovely']}
            />
            <Card className={style.card}
               id = {333}
               name = {'Chueco'}
               height_min = {10}
               height_max = {18}
               weight_min = {7}
               weight_max = {11}
               life_span = {14}
               img = {chueco}
               temperaments = {['Protective, Territorial, Grumpy']}
               />
            </div>
        </div>
    )
}

export default About