import filter from "../../assests/filter.svg"
import Button from "../Button/Button"
import { ContainerNav } from "./styled"

function Nav() {
    return(
        <>
            <ContainerNav>
                <Button title={'Donuts'}/>
                <Button title={'Ice Cream'}/>
                <Button title={'Bomboloni'}/>
                <img src={filter} alt="filtro"/>
            </ContainerNav>
        </>
    )
}

export default Nav