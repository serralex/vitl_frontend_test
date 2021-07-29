import { useDispatch } from 'react-redux'
import { addItemToBasket } from '../../features/basket/slices'

const ProductItem = (product) =>{
    const dispatch = useDispatch()

    return(
        <div>
            <div>Image</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <button onClick={() => dispatch(addItemToBasket(product))}>Add to basket</button>
        </div>
    )
}

export default ProductItem