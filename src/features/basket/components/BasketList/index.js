import { useSelector, useDispatch } from 'react-redux'
import { removeBasketItem } from '../../../../features/basket/slices'
import BasketItem from '../../../../ui/basket/BasketItem'

import { formatProductItem } from './config'

const BasketList = () =>{
    
    const {items} = useSelector((state) => state.basket)

    const dispatch = useDispatch()
    const handleClick = (product) =>{
        dispatch(removeBasketItem(product))
    }

    return(
        <>
            <h1>Basket</h1>
            {items.map(({name,price,nutrients}) =>{ 
                const formatedProductItem = formatProductItem({name, price, nutrients, onHandleClick:handleClick})

                return(
                    <div key = {name}>
                        <BasketItem {...formatedProductItem}/>
                    </div>
                )
            })
            } 
        </>
    )
}

export default BasketList