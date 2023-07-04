import Card from "../Cards/Card";
import Header from "../Header/Header";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Nav from "../Nav/Nav";
import { SectionCard } from "./styled";

function Home() {
    <>
        <Header/>
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