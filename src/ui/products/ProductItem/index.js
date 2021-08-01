import { useSelector } from "react-redux"
import { Divider, Heading3 } from "../../../resources/styles/globalStyles"
import Button from "../../Button"

import { StyledProductItem, ProductItemBg } from "./style"

const ProductItem = ({
    name,
    price,
    nutrients,
    onHandleClick,
    btnText,
}) =>{

    const {currency} = useSelector((state) => state.products.config)

    return(
        <StyledProductItem>
            <ProductItemBg>
                <Heading3>{name}</Heading3>
                <Divider marginTop ={'15px'} marginBottom={'20px'}/>
                <div style={{margin: '8px 0px 16px 0px', fontWeight:'bold'}}>{currency === 'GBP' && '£'}{price}</div>
                <Button 
                    onClick={() => onHandleClick({name,price,nutrients})}
                    type = {'primary'}
                    btnText ={btnText}
                />
            </ProductItemBg>
        </StyledProductItem>
    )
}

export default ProductItem