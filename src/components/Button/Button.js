import {ButtonStyle} from "./styled"

function Button(props) {
    return( 
        <ButtonStyle>
            {props.title}
        </ButtonStyle>

    )
}

export default Button