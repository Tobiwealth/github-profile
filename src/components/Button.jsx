import React from 'react'

const Button = ({handleSearch}) => {
	return (
		<div >
			<button onClick={handleSearch}>Search</button>
		</div>
	)
}

export default Button