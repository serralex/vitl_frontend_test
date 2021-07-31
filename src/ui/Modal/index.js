import { useSelector, useDispatch } from 'react-redux'
import { setModalOpen } from '../../features/global/slices'

import { StyledDrawer } from './style'

const Modal = ({content}) => {
    const dispatch = useDispatch()
    const {isModalOpen} = useSelector((state) => state.global)

    return(
        <StyledDrawer 
            open={isModalOpen}
            anchor='right'
            children={content}
            onClose = {() => dispatch(setModalOpen(false))}
        >
        </StyledDrawer>
    )
}

export default Modal