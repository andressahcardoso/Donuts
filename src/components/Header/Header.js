import Menu from "../../assests/menu.svg"
import Search from "../../assests/search.svg"
import {ButtonNav, primeiroMenu} from "./styled"

function Header() {
    return (
        <>
            <primeiroMenu>
                <ButtonNav><img src={Menu} /></ButtonNav>
                <ButtonNav><img src={Search} /></ButtonNav>
            </primeiroMenu>
        </>
    )
}

export default Header