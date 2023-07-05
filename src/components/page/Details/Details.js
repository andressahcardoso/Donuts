import {Header} from "../../Header/Header"
import Seta from "../../assests/seta.png"
import Ponto from "../../assests/ponto.png"
import group from "../../assests/group.png"
import donutsGrande from "../../assests/group.png"
import { ContainerDiv, DetailsContainer, DonutsText, DonutsTitle, Image, MoreButton, MoreText, NumberText, Products } from "./styled"

function Details(props) {
    return(
        <>
            <Header
            page={props.pagina}
            FirstImg={seta}
            SecondImg={ponto}
            />    

            <DetailsContainer>
                <Image src=""/>

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
                </ContainerDiv>    
            </DetailsContainer> 

        </>
    )
}

export default Details