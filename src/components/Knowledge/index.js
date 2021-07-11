import {Container} from "./styles"
import {useProvider} from "../../Provider"
const Knowledge = ({ nome, imagem, selected, onClick }) => {
    const {themeName} = useProvider()
    return(
        <Container selected={selected} onClick={onClick} themeName={themeName}>
            <img src={imagem} alt={nome}/>
        </Container>
    )
}

export default Knowledge;