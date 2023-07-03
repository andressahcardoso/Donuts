import {CardContainer, CardImg, CardText, CardTitle, DivCard} from "./styled"

function Card() {
    return (
    <CardContainer>
        <CardImg src=""/>
        <CardTitle>Título</CardTitle>
        <CardText>Donuts Title</CardText>
        <DivCard>
            <p>R$: 7,90</p>
            <a>Mais</a>
        </DivCard>
    </CardContainer>
    )
}

export default Card