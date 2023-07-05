import Card from "../Cards/Card";
import Header from "../Header/Header";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Nav from "../Nav/Nav";
import { SectionCard } from "./styled";

import Menu from ""
import Lupa from ""

function Home(props) {
    <>
        <Header
        pagina={props.pagina}
        FirstImg={Menu}
        SecondImg={Lupa}
        />
        <HeaderTitle/>
        <Nav/>

        <SectionCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SectionCard>
    </>
}

export default Home