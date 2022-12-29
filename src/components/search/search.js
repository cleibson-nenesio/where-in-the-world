export const Search = (props) => {
    return(
        <input type='search' placeholder='Search for a country...' onChange={props.handleSearch}/>
    )
}