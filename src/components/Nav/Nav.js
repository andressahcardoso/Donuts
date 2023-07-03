import filtro from "../../assests/filtro.png"
import Button from "../Button/Button"
import { ContainerNav } from "./styled"

function Nav() {
    return(
        <ContainerNav>
            <Button title={"Donuts"}/>
            <Button title={"Ice Cream"}/>
            <Button title={"Bomboloni"}/>
            <img src={filtro}/>
        </ContainerNav>
    )
}

export default Nav