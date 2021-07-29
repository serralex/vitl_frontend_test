import { useProducts } from "../../features/products/hooks"
import ProductList from "../../components/ProductList"

const StorePage = () =>{
    const {list, config} = useProducts()
    return(
        <ProductList list={list}/>
    )
}

export default StorePage