import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styled"

function Card() {
    return (
        <>
            <CardContainer>
                <ImagemCard src=''/>
                <TituloCard>Título</TituloCard>
                <TextCard>Donuts Title</TextCard>
                <DivCard>
                    <p>R$: 7,90</p>
                    <p>Mais</p>
                </DivCard>
            </CardContainer>
        </>
    )
}

export default Card