import './InventoryComponent.css'
function InventoryComponent(props) {
    return(
        <div className='inventoryContainer'>
            <div>
            <h1>Current inventory for cereal: {props.name}.</h1>
            </div>
            <div>
            <h1>Current stock count for {props.name} is {props.stockCount}.</h1>
            </div>
            <div>
            <h1>Current price for {props.name} is {props.price}.</h1>
            </div>
            <div>
            <h1>We have the {props.name} you are looking for!</h1>
            </div>
        </div>
    )
}
export default InventoryComponent;