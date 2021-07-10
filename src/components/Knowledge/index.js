import {Container} from "./styles"

const Knowledge = ({ nome, imagem, experiencia, selected, onClick }) => {
    return(
        <Container selected={selected} onClick={onClick}>
            <img src={imagem} alt={nome}/>
        </Container>
    )
}

export default Knowledge;