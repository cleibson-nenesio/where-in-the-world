import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext, themes } from "../../contexts/theme-toggler"

export const ThemeTogglerButton = (props) => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <StyledThemeToggler onClick={
            () => {setTheme(theme === themes.dark ? themes.light : themes.dark)}
        } style={{color: theme.textColor}}>{props.children}</StyledThemeToggler>
    )
}

const StyledThemeToggler = styled.button`
    font-size: 16px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
`