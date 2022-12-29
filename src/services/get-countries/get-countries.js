const getCountries = async (param) => {
    const response = await fetch(`https://restcountries.com/v3.1/${param}`)
    return await response.json()
}

export { getCountries }