import { NavLink } from 'react-router-dom';
import style from './country.module.css'

const Country = (props) => {

    return (
        <div className={style.Container}>
            <img src={props.image} alt={props.name} />
            <NavLink to={`/detail/${props.id}`}><h1>{props.name}</h1></NavLink>
        </div>
    )
}

export default Country;