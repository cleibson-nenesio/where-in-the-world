import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-toggler"
import { getCountries } from "../../services/get-countries/get-countries"
import { CountryData } from "../country-data/country-data"

export const CountryDetails = () => {
    const [country, setCountry] = useState({
        data: []
    })

    const { code } = useParams()
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const getCountry = async () => {
            const countryData = await getCountries(`alpha?codes=${code}`)
            
            setCountry({
                data: countryData
            })
        }

        getCountry()
    }, [code])

    return(
        <>
            <Section theme={theme}>
                <DivBack theme={theme}>
                    <Link to='/'>⬅ Back</Link>
                </DivBack>

                <CountryData country={country.data}/>
            </Section>
        </>
    )
}

const Section = styled.section`
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.background};
    font-family: 'Nunito Sans', sans-serif;
    min-height: 100vh;
`

const DivBack = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 50px 150px;

    > a {
        padding: 8px 40px;
        text-decoration: none;
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.elements};
        box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.4);
        border-radius: 8px;
    }

    @media(max-width: 425px) {
        padding: 30px 20px;
    }
`