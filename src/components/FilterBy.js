import React from 'react'

const FilterBy = ({ handleClick }) => {
	return (
		<form>
		Greased? <input type="checkbox" onClick={handleClick}/>
		</form>
	)
}

export default FilterBy