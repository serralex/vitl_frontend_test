import ProductItem from "./product.item"

const ProductList = ({list}) =>{
    return(
        list.map((product) =>{ 
            return(
                <div key = {product.name}>
                    <ProductItem {...product}/>
                </div>
            )
        })
    )
}

export default ProductList