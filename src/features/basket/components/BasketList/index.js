import { useSelector, useDispatch } from 'react-redux'
import { removeBasketItem } from '../../../../features/basket/slices'
import BasketItem from '../../../../ui/basket/BasketItem'

import { formatProductItem } from './config'
import { StyledBasket } from './style'

const BasketList = () =>{
    
    const {items} = useSelector((state) => state.basket)

    const dispatch = useDispatch()
    const handleClick = (product) =>{
        dispatch(removeBasketItem(product))
    }

    return(
        <>
            <StyledBasket>
                <h1 style={{fontSize:48, margin: '30px 0px'}}>Your basket</h1>
                <ul style={{padding: 15}}>
                    {items.map(({name,price,nutrients}) =>{ 
                        const formatedProductItem = formatProductItem({name, price, nutrients, onHandleClick:handleClick})

                        return(
                            <li key = {name}>
                                <BasketItem {...formatedProductItem}/>
                            </li>
                        )
                    })
                    } 
                </ul>
            </StyledBasket>
        </>
    )
}

export default BasketList