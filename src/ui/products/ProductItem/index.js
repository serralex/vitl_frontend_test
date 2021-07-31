import Button from "../../Button"
import { StyledProductItem, ProductItemBg } from "./style"

const ProductItem = ({
    name,
    price,
    nutrients,
    onHandleClick,
    btnText,
}) =>{
    return(
        <StyledProductItem>
            <ProductItemBg>
                <div>{name}</div>
                <div>{price}</div>
            </ProductItemBg>
            <Button 
                onClick={() => onHandleClick({name,price,nutrients})}
                type = {'primary'}
                btnText ={btnText}
            />
        </StyledProductItem>
    )
}

export default ProductItem