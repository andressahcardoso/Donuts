import {ButtonNav, PrimeiroMenu} from "./styled"

import Menu from "../../assests/menu.svg"
import Search from "../../assests/search.svg"


function Header() {
    return (
        <PrimeiroMenu>
            <ButtonNav><img src={Menu} alt="Menu"/></ButtonNav>
            <ButtonNav><img src={Search}  alt="Nav"/></ButtonNav>
        </PrimeiroMenu>
    )
}

export default Header