import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styled"

function Card() {
    return (
    <CardContainer>
        <ImagemCard src=""/>
        <TituloCard>Título</TituloCard>
        <TextCard>Donuts Title</TextCard>
        <DivCard>
            <p>R$: 7,90</p>
            <a>Mais</a>
        </DivCard>
    </CardContainer>
    )
}

export default Card