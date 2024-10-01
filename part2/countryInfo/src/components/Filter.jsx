const Filter = ({filterCountries}) => {
    return(
        <div>
            Find Countries: <input onChange={filterCountries}/>
        </div>
    )
}

export default Filter;