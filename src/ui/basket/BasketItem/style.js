import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../../resources/styles/globalStyles';

export const StyledBasketItem = styled.div`
    display:flex;
    min-height: 175px;
    margin-bottom: 20px;

    .basketItemImage{
        flex: 0 1 150px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        background: ${STYLE_CONSTANTS.creamColor};
        margin-right: 2px;
    }

    .basketItemDetail{
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        flex: 1;
        background: ${STYLE_CONSTANTS.creamColor};
        position:relative;
        padding: 26px 15px 16px 21px;

        .basketItemDelete{
            font-size: 20px;
            font-family: Hurme,SofiaPro,Helvetica,Arial,Sans-Serif;
            position: absolute;
            top: 10px;
            right: 10px;
            width: 20px;
            height: 20px;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            cursor: pointer;
            color: #adaa9b;
            transition: .3s color ease;
            }
    }
`