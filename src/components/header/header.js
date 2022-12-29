import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-toggler"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"

export const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledHeader theme={theme}>
            <h1>Where in the world?</h1>
            <ThemeTogglerButton>Dark Mode</ThemeTogglerButton>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    padding: 0 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.textColor};
    box-shadow: 0px 0px 9px -6px rgba(0,0,0,0.75);

    @media(max-width: 425px) {
        font-size: 11px;
        padding: 0 10px;
    }
`