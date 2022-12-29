import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-toggler"

export const Card = (props) => {
    const { theme } = useContext(ThemeContext)

    return(
        <>
        {props.countries.map((country, index) => {
            return (
                <DivCountry key={index} theme={theme}>
                    <StyledLink to={`/country/${country.cca2}`} theme={theme}>
                        <Image src={country.flags.png} alt={`${country.name.common} Flag`}/>
                        
                        <DivInformation>
                            <h2>{country.name.common}</h2>
                            <p>Population: <span>{country.population.toLocaleString()}</span></p>
                            <p>Region: <span>{country.region}</span></p>
                            <p>Capital: <span>{country.capital}</span></p>
                        </DivInformation>
                    </StyledLink>
                </DivCountry>
            )
        })}
        </>
    )
}

const DivCountry = styled.div`
    box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.75);
    width: 320px;
    height: 427px;
    border-radius: 5px;
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.textColor};
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.textColor};
`

const Image = styled.img`
    width: 100%;
    height: 213px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`
const DivInformation = styled.div`
    padding: 30px 22px;

    h2 {
        margin-bottom: 20px;
    }

    > p {
        margin-bottom: 10px;
        font-weight: 600;
    }

    > p > span {
        color: hsl(0, 0%, 52%);
    }
`
