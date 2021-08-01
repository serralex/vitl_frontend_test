import ProductList from "../../features/products/components/ProductList"
import { useProducts } from "../../features/products/hooks"
import { Container, Row } from '../../resources/styles/globalStyles'


const StorePage = () =>{
    const {list} = useProducts()
    return(
        <>
            <Container>
                <Row>
                    <ProductList list={list}/>
                </Row>
            </Container>
        </>

    )
}

export default StorePage