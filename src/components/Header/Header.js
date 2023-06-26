import Menu from "../../assests/menu.svg"
import Search from "../../assests/search.svg"


function Header() {
    return (
        <>
            <div>
                <button><img src={Menu} /></button>
                <button><img src={Search} /></button>
            </div>
        </>
    )
}

export default Header