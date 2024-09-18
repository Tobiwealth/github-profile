import React from 'react'
import '../App.css'

const InputComponent = ({inputRef, username, handleInputChange}) => {
	return (
		<div className="input-wrapper">
			<input
			    ref={inputRef}
			    className=""
			    type="text"
		        value={username}
		        onChange={handleInputChange}
		        placeholder="Enter GitHub Username"
		        aria-label="GitHub Username"
			/>
		</div>
	)
}

export default InputComponent