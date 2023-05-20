import { NavLink } from 'react-router-dom';
import style from './country.module.css'

const Country = (props) => {

    return (
        <NavLink to={`/detail/${props.id}`}>
        <div className={style.Container}>
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <h1>{props.continent}</h1>
        </div>
        </NavLink>
    )
}

export default Country;