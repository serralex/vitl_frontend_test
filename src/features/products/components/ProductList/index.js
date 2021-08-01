import { useDispatch, useSelector } from 'react-redux'
import { addItemToBasket, calcNutrientsSum } from '../../../../features/basket/slices'
import { Divider, Section } from '../../../../resources/styles/globalStyles'
import ProductItem from '../../../../ui/products/ProductItem'

import { setDialog, setOffCanvasOpen } from '../../../global/slices'
import { formatProductItem } from './config'
import { StyledProductList } from './style'


const ProductList = ({list}) =>{

    const dispatch = useDispatch()
    const {items} = useSelector((state) => state.basket)
    const {tolerableUpperLimits} = useSelector((state) => state.products.config)


    const handleClick = (product) =>{
        console.log('f')
        const isProductAlready = items.some(e => e.name === product.name)

        const updatedNutrientsSum = calcNutrientsSum([...items, product])
        const exceedTul = updatedNutrientsSum.some(element => tolerableUpperLimits.some((e) => e.id === element.id && element.amount > e.amount))

        if (isProductAlready) dispatch(setOffCanvasOpen(true))
        else{
            if(exceedTul){
                
                dispatch(setDialog({
                    isDialogOpen: true,
                    heading: 'This product cannot be added to your basket',
                    content: 'Adding this product to your basket would exceed a nutrient TUL'
                }))  
            }
            else{
                dispatch(addItemToBasket(product))
                dispatch(setOffCanvasOpen(true))
            }
        }
    }

    return(
        <Section style={{marginTop: 48, textAlign:'center'}}>
            <h1>Products</h1>
            <Divider/>
            <StyledProductList>
                {list.map(({name,price,nutrients}) =>{ 
                    const formatedProductItem = formatProductItem({name, price, nutrients, onHandleClick:handleClick})

                    return (
                        <li key={name}><ProductItem {...formatedProductItem}/></li>
                    )
                })
                }
            </StyledProductList>
        </Section>
    )
}

export default ProductList