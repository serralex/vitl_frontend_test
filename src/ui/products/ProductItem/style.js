import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../../resources/styles/globalStyles';

export const StyledProductItem = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
`

export const ProductItemBg = styled.div`
    display:flex;
    align-items: center;
    height: 300px;
    width: 360px;
    margin: 24px 48px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${STYLE_CONSTANTS.creamColor}
`