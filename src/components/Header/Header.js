import {ButtonNav, PrimeiroMenu} from "./styled"

// import Menu from "../../assests/menu.svg"
// import Search from "../../assests/search.svg"


function Header(props) {

    const handlePageChange = () => {
        props.pagina() 
    } 
    return (
        <>
            <PrimeiroMenu>
                <ButtonNav onClick={handlePageChange}><img src={props.FirstImg} alt="Menu" /></ButtonNav>
                <ButtonNav><img src={props.SecondImg} alt="Search"/></ButtonNav>
            </PrimeiroMenu>
        </>
    )
}

export default Header