import React from "react"
import { Container } from "./styles"

import Header from "../../components/Header"
import MenuLateral from "../../components/MenuLateral"

const Home = () => {
    
    return (
        <Container>
            <Header />
            <MenuLateral/>
        </Container>
    )
}

export default Home;