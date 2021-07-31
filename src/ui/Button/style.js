import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../resources/styles/globalStyles';

export const StyledButton = styled.button`
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 18px;
    background: ${props => props.type == "primary" ? STYLE_CONSTANTS.primaryColor : "transparent"}};
    border: ${props => props.type == "primary" ? 'none' : "2px solid #adaa9b;"}};
    height: 60px;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 20px;
    min-width: 160px;
    font-size: 16px;
    cursor: pointer;
    outline: 0!important;
    transition: .2s all cubic-bezier(.25,.46,.45,.94);
`;