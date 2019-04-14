import React from 'react'

const SearchBox = ({searchfield, SearchChange}) => {
	return(
		<div>
			<input 
				className = 'pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder = 'Search Robots' 
				onChange={SearchChange}
			/>
		</div>
	)
}
export default SearchBox;