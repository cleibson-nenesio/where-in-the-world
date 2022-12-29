export const Filter = (props) => {
    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    return(
        <select onChange={props.handleFilter}>
            <option selected disabled hidden>Filter By Region</option>
            {regions.map((regions, index) => {
                return <option value={regions} key={index}>{regions}</option>
            })}
        </select>
    )
}