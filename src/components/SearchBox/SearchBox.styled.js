import styled from 'styled-components';

export const SearchContainer = styled.div`
	display: flex;
	justify-content: end;
	align-content: center;
	padding: 10px 20px;
`;

export const SearchInput = styled.input`
	border: none;
	border-bottom: 2px solid black;
	padding-bottom: 2px;

	&:focus {
		border-bottom: 2px solid #007bff;
		outline: none;
	}
`;
export const Magnifier = styled.span`
	padding-bottom: 2px;
	border-bottom: 2px solid black;

	${SearchInput}:focus {
		border-bottom: 2px solid #007bff;
	}
`;
