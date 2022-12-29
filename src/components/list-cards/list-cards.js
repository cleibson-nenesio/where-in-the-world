import { useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../contexts/theme-toggler"
import { getCountries } from "../../services/get-countries/get-countries"
import { Card } from "../card/card"
import { Filter } from "../filter/filter"
import { Search } from "../search/search"

export const ListOfCards = () => {
    const [countries, setCountries] = useState({
        data: []
    })

    const { theme } = useContext(ThemeContext)

    useEffect(() => {        
        const getAllCountries = async () => {
            const country = await getCountries('all')
            setCountries({
                data: country
            })
        }

        getAllCountries()
    }, [])

    const handleFilter = async (event) => {
        if(event.target.value !== 'All') {
            const filteredByRegion = await getCountries(`/region/${event.target.value}`)

            setCountries({
                data: filteredByRegion
            })
            return
        }

        const allCountries = await getCountries('all')

        setCountries({
            data: allCountries
        })
    }

    const handleSearch = async (event) => {
        if(event.target.value === '') return
        const searchedCountry = await getCountries(`/name/${event.target.value}`)

        if(searchedCountry.message === 'Not Found') return
        setCountries({
            data: searchedCountry
        })
    }

    return(
        <>
            <Main theme={theme} id='main'>
                <SearchOptions theme={theme}>
                    <Search handleSearch={handleSearch}/>
                    <Filter handleFilter={handleFilter} />
                </SearchOptions>
                
                <Section>
                    <Card countries={countries.data}/>
                </Section>
            </Main>
        </>
    )
}

const Main = styled.main`
    padding: 30px 10px;
    min-height: 100vh;
    background-color: ${props => props.theme.background};
`

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
`

const SearchOptions = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px 60px;

    select,
    input {
        padding: 12px 25px;
        outline: none;
        border-radius: 5px;
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.elements};
        border: none;
        font-size: 16px;
        font-weight: 600;
        box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.75);
        margin-bottom: 15px;
    }

    input {
        width: 500px;
    }

    @media(max-width: 425px) {
        padding: 30px 10px;
    }
`