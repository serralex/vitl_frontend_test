import { StyledDialog } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { setDialog } from '../../features/global/slices'

import {Heading3} from '../../resources/styles/globalStyles'

const CustomDialog = () => {
    const dispatch = useDispatch()
    const {isDialogOpen, heading, content} = useSelector((state) => state.global.dialog)

    return(
        <StyledDialog
            open={isDialogOpen}
            transitionDuration ={0}
            onClose = {() => dispatch(setDialog({isDialogOpen:false, content:''}))}
        >
            <Heading3>{heading}</Heading3>
            <div style={{marginTop:16}}>{content}</div>

        </StyledDialog>
    )
}

export default CustomDialog