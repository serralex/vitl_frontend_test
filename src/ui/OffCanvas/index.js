import { useSelector, useDispatch } from 'react-redux'
import { setOffCanvasOpen } from '../../features/global/slices'

import { StyledDrawer } from './style'

const OffCanvas = ({content}) => {
    const dispatch = useDispatch()
    const {isOffCanvasOpen} = useSelector((state) => state.global)

    return(
        <StyledDrawer 
            open={isOffCanvasOpen}
            anchor='right'
            children={
                <>
                <div className='modalClose' onClick= {() => dispatch(setOffCanvasOpen(false))}>×</div>
                {content}
                </>
            }
            onClose = {() => dispatch(setOffCanvasOpen(false))}
        >
        </StyledDrawer>
    )
}

export default OffCanvas