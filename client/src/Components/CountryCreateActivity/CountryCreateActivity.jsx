const CountryCreateActivity = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
        </div>
    )
}

export default CountryCreateActivity