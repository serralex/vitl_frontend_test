import { StyledButton } from "./style"

const Button = ({onClick, btnText, type}) =>{
    return(
        <StyledButton onClick = {onClick} type={type}>
            {btnText}
        </StyledButton>
    )
}

export default Button