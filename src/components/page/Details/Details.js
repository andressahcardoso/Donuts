import Header from "../../Header/Header"
import Seta from "../../../assests/menu.svg"
import Ponto from "../../../assests/menu.svg"
import group from "../../../assests/menu.svg"
import donutsGrande from "../../../assests/menu.svg"
import { ButtonAddCard, ContainerDiv, DetailsContainer, DonutsText, DonutsTitle, Image, MoreButton, MoreText, NumberText, Products } from "./styled"

function Details(props) {
    return(
        <>
            <Header
                page={props.pagina}
                FirstImg={Seta}
                SecondImg={Ponto}
            />    

            <DetailsContainer>
                <Image src={donutsGrande}/>

                <ContainerDiv>
                    <DonutsTitle>
                        Inicorn Sprinkles    
                    </DonutsTitle> 
                    <DonutsText>
                        Texto texto texto texto texto texto    
                    </DonutsText> 

                    <Products>
                        <img src={group}/>
                        <NumberText>7800</NumberText>
                    </Products>

                    <Products>
                        <MoreText>Need more?</MoreText>
                        <MoreButton>Add more</MoreButton>  
                    </Products>

                    <ButtonAddCard>Add to Card</ButtonAddCard>
                </ContainerDiv>    
            </DetailsContainer> 

        </>
    )
}

export default Details