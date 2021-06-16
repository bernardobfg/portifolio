import React from "react"
import { Container } from "./styles"
import {useTheme} from "../../SetThemeProvider"

const Home = () => {
    const { themeName, setThemeName } = useTheme();
    const handleClick = (e) => {
        e.preventDefault()
        setThemeName(themeName === "light" ? "dark" : "light")
    }
    return (
        <Container>
            <button onClick={(e) => handleClick(e)}>
                Click
            </button>
        </Container>
    )
}

export default Home;