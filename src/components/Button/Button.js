import {ButtonStyle} from "./styled"

function Button() {
    return( 
        <ButtonStyle>
            {props.title}
        </ButtonStyle>

    )
}

export default Button