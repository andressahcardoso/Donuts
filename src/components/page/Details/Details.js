import Header from "../../Header/Header"
import Back from "../../../assests/back.svg"
import Menu3 from "../../../assests/menu3.svg"
import AddButtons from "../../../assests/AddButtons.svg"
import LargeDonut from "../../../assests/LargeDonut.svg"
import { ButtonAddCard, ContainerDiv, DetailsContainer, DonutsText, DonutsTitle, Image, MoreButton, MoreText, NumberText, Products } from "./styled"

function Details(props) {
    return(
        <>
            <Header
                pagina={props.pagina}
                FirstImg={Back}
                SecondImg={Menu3}
            />    

            <DetailsContainer>
                <Image src={LargeDonut} alt=''/>

                <ContainerDiv>
                    <DonutsTitle>
                        Unicorn Sprinkles    
                    </DonutsTitle> 
                    <DonutsText>
                        A fluffy cooked donut covered by a creamy straberry flavour with rainbow sprinkles.
                    </DonutsText> 

                    <Products>
                        <img src={AddButtons} alt=''/>
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