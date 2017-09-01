import React from 'react'

const SortBy = ({ handleChange }) => {
	return (
		<select onChange={handleChange} defaultValue="all">
			<option value='all'> All </option>
			<option value='name'> Name </option>
			<option value='weight'> Weight </option>
		</select>
	)
}

export default SortBy