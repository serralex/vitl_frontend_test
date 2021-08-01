import { useSelector } from "react-redux"
import { Heading3 } from "../../../resources/styles/globalStyles"

import {StyledBasketItem} from './style.js'

const BasketItem = ({
    name,
    price,
    nutrients,
    onHandleClick,
}) =>{

    const {currency} = useSelector((state) => state.products.config)

    return(
        <StyledBasketItem>
            <div className ={'basketItemImage'}></div>
            <div className ={'basketItemDetail'}>
                <div 
                    className ={'basketItemDelete'}
                    onClick={() => onHandleClick({name,price,nutrients})}
                >   ×
                </div>
                <Heading3 style={{width:'100%', textAlign:'left'}}>{name}</Heading3>
                <div style={{fontWeight:'bold', width:'100%', textAlign:'left'}}>{currency === 'GBP' && '£'}{price}</div>
            </div>
        </StyledBasketItem>
    )
}

export default BasketItem