const SingleInput = ({name, value, handleInputChange}) => {
    return(
        <div>
            {name}: <input name={name} value ={value} onChange={handleInputChange}/>
        </div>
    )
}
export default SingleInput;