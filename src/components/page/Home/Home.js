import Card from "../../Cards/Card";
import Header from "../../Header/Header";
import HeaderTitle from "../../HeaderTitle/HeaderTitle";
import Nav from "../../Nav/Nav";
import { SectionCard } from "./styled";

import Menu from "../../../assests/menu.svg"
import Lupa from "../../../assests/search.svg"

import unicorn from "../../../assests/unicorn.svg"
import dark from "../../../assests/dark.svg"
import choco from "../../../assests/choco.svg"
import vanilla from "../../../assests/vanilla.svg"

function Home(props) {
    return(
        <>
            <Header
                pagina={props.pagina}
                FirstImg={Menu}
                SecondImg={Lupa}
            /> 

        <HeaderTitle/>
            <Nav/>

            <SectionCard>
                <Card donut={unicorn} name={'Unicorn Sprinkle'} description={'Straberry creamy...'}/>
                <Card donut={dark} name={'Dark Sprinkles'} description={'Chocolate with...'}/>
                <Card donut={choco} name={'Choco Avocado'} description={'Avocado creamy'}/>
                <Card donut={vanilla} name={'Vanilla Splash'} description={'Vanilla creamy...'}/>
            </SectionCard>
        </>
    )
}

export default Home