import React from 'react';
import "./search.scss";
import Col from 'react-bootstrap/Col';
const SearchBox = (props) => {
	return (
		<Col className='srch'>
		<p className='text-black mt-4 tex'>Search</p>
			<input
				className='form-control input'
				value={props.value}
				onChange={(event) => props.searchBox(event.target.value)}
				placeholder='Type to search...'
			></input>
		</Col>
	);
};

export default SearchBox;
