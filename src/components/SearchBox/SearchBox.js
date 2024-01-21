import React from 'react';

import { SearchContainer, SearchInput, Magnifier } from './SearchBox.styled';

const SearchBox = ({ handleSearch }) => {
	return (
		<SearchContainer>
			<Magnifier>🔍 </Magnifier>
			<SearchInput
				placeholder='  Search...'
				type='text'
				onChange={(e) => handleSearch(e.currentTarget.value)}
			></SearchInput>
		</SearchContainer>
	);
};

export default SearchBox;
