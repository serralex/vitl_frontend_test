import Button from "../../Button"

const BasketItem = ({
    name,
    price,
    nutrients,
    onHandleClick,
    btnText,
}) =>{

    return(
        <div>
            <div>Image</div>
            <div>{name}</div>
            <div>{price}</div>
            <Button 
                onClick={() => onHandleClick({name,price,nutrients})}
                btnText ={btnText}
            />
        </div>
    )
}

export default BasketItem