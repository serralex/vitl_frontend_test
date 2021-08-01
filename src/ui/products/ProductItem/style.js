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
    width: 300px;
    margin: 24px 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${STYLE_CONSTANTS.creamColor};

    @media (max-width: 425px) {
        width: 280px;
        margin: 8px;
      }
`