import Filter from "../Filter/Filter"
import Order from "../Order/Order"

const FilterAndOrderBar = (props) => {
    return (
        <div>
            <Filter prevHandler={props.prevHandler} nextHandler={props.nextHandler}/>
            <Order prevHandler={props.prevHandler} nextHandler={props.nextHandler} />
        </div>
    )
}

export default FilterAndOrderBar;