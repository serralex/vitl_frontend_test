import { useDispatch, useSelector } from 'react-redux'
import { setModalOpen } from '../../../features/global/slices'

import {ReactComponent as Logo} from '../../../resources/img/vitl_logo.svg'
import {ReactComponent as IconCart} from '../../../resources/img/icon-cart.svg'

import {StyledHeader, Nav, HeaderCart, Bullet} from './style'
import { Container } from '../../../resources/styles/globalStyles'

const Header = () =>{
    const dispatch = useDispatch()
    const {items} = useSelector((state) => state.basket)

    return(
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo style={{width:60}}/> 
                    <HeaderCart onClick = {() => dispatch(setModalOpen(true))}>
                        <IconCart/>  
                        <Bullet>{items.length}</Bullet>
                    </HeaderCart> 
                </Nav>
            </Container> 
        </StyledHeader>
    )
}

export default Header