import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styled"
import more from "../../assests/more.svg"

function Card(props) {
    return (
        <>
            <CardContainer>
                <ImagemCard src={props.donut}/>
                <TituloCard>{props.name}</TituloCard>
                <TextCard>{props.description}</TextCard>
                <DivCard>
                    <p>R$: 7,90</p>
                    <img src={more} alt='Mais'/>
                </DivCard>
            </CardContainer>
        </>
    )
}

export default Card