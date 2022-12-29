import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-toggler"

export const CountryData = (props) => {
    const { theme } = useContext(ThemeContext)

    return(
        <>
            {props.country.map((country, index) => {
                return(
                    <ContainerData key={index}>
                        <DivFlag>
                            <img src={country.flags.png} alt={`${country.name.official} Flag`}/>
                        </DivFlag>

                        <DivInformation>
                            <h2>{country.name.common}</h2>
                            <DivCharacteristic>
                                <div>
                                    <p>Native Name: {Object.values(country.name.nativeName).map((name, index) => {
                                        return <span key={index}>{name.common} </span>
                                    })}</p>
                                    <p>Population: <span>{country.population.toLocaleString()}</span></p>
                                    <p>Region: <span>{country.region}</span></p>
                                    <p>Sub Region: <span>{country.subregion}</span></p>
                                    <p>Capital: <span>{country.capital} </span></p>
                                </div>
                                <div>
                                    <p>Top Level Domain: <span>{country.tld}</span></p>
                                    <p>Currencies: {Object.values(country.currencies).map((currency, index) => {
                                        return  <span key={index}>{currency.name} </span>
                                    })}</p>

                                    <p>Languages: {Object.values(country.languages).map((language, index) => {
                                        return <span key={index}>{language} </span>
                                    })}</p>
                                </div>
                            </DivCharacteristic>

                            <DivBorders theme={theme}>
                                <p>Border Countries: </p>
                                {country.borders?.map((countryBorder, index) => {
                                    return(
                                        <Link to={`/country/${countryBorder}`} key={index}>
                                            <p>{countryBorder}</p>
                                        </Link>
                                    ) 
                                })}
                            </DivBorders>
                        </DivInformation>
                    </ContainerData>
                )
            })}
        </>
    )
}

const ContainerData = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const DivFlag = styled.div`
    width: 500px;
    height: 364px;
    box-shadow: 0px 0px 21px -7px rgba(0,0,0,0.75);

    img {
        width: 100%;
        height: 100%;
    }

    @media(max-width: 425px) {
        height: 200px;
    }
`

const DivCharacteristic = styled.div`
    height: 200px;
    gap: 120px;
    display: flex;
    flex-wrap: wrap;

    > div > p{
        margin-bottom: 10px;
        font-weight: 600;
    }

    > div > p > span {
        color: hsl(0, 0%, 52%); 
    }

    @media(max-width: 425px) {
        gap: 0;
    }
`

const DivInformation = styled.div`
    padding: 20px;
    height: 60%;

    h2 {
        margin-bottom: 30px;
    }
`

const DivBorders = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    margin-top: 80px;

    > a {
        background-color: ${props => props.theme.elements};
        color: ${props => props.theme.textColor};
        text-decoration: none;
        padding: 5px 10px;
        outline: none;
        border-radius: 5px;
        box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.3);
    }
`