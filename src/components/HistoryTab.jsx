import React from 'react'

const HistoryTab = ({searchHistory, setUsername}) => {
	return (
		<div className="history-tab">
		    <h3>Search History</h3>
			<ul>
				{searchHistory.map((user, index) => (
				    <li key={index} onClick={() => setUsername(user)}>
				        {user}
				    </li>
				))}
			</ul>
	    </div>
	)
}

export default HistoryTab