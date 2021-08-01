import styled from 'styled-components';
import { STYLE_CONSTANTS } from '../../resources/styles/globalStyles';

export const StyledButton = styled.button`
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 18px;
    background: ${props => props.type === "primary" ? STYLE_CONSTANTS.primaryColor : "transparent"}};
    border: ${props => props.type === "primary" ? 'none' : "2px solid #adaa9b;"}};
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
    font-weight: bold;

    &:hover{
        color: #333;
        box-shadow: 0 0.4px 0.4px rgb(0 0 0 / 2%), 0 1px 1px rgb(0 0 0 / 3%), 0 2.1px 2.1px rgb(0 0 0 / 4%), 0 4.4px 4.4px rgb(0 0 0 / 5%), 0 12px 12px rgb(0 0 0 / 7%);
    }
`;