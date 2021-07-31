import { useDispatch, useSelector } from 'react-redux'
import { addItemToBasket, calcNutrientsSum } from '../../../../features/basket/slices'
import { Divider, Section } from '../../../../resources/styles/globalStyles'
import ProductItem from '../../../../ui/products/ProductItem'

import { setModalOpen } from '../../../global/slices'
import { formatProductItem } from './config'
import { StyledProductList } from './style'

const ProductList = ({list}) =>{

    const dispatch = useDispatch()
    const {items} = useSelector((state) => state.basket)
    const {tolerableUpperLimits} = useSelector((state) => state.products.config)

    const handleClick = (product) =>{
        const isProductAlready = items.some(e => e.name == product.name)

        const updatedNutrientsSum = calcNutrientsSum([...items, product])
        const exceedTul = updatedNutrientsSum.some(element => tolerableUpperLimits.some((e) => e.id == element.id && element.amount > e.amount))

        exceedTul || isProductAlready
        ? console.log('no puedes')
        : dispatch(addItemToBasket(product))

        dispatch(setModalOpen(true))
    }

    return(
        <Section style={{marginTop: 24, textAlign:'center'}}>
            <h1>Products</h1>
            <Divider/>
            <StyledProductList>
                {list.map(({name,price,nutrients}) =>{ 
                    const formatedProductItem = formatProductItem({name, price, nutrients, onHandleClick:handleClick})

                    return (
                    <ProductItem {...formatedProductItem}/>
                    )
                })
                }
            </StyledProductList>
        </Section>
    )
}

export default ProductList