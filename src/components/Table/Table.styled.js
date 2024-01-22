import styled from 'styled-components';

export const StyledTable = styled.table`
	height: 400px;
	width: 100%;
	margin-bottom: 20px;
	border-collapse: collapse;
`;

export const StyledThead = styled.thead`
	text-align: center;
`;

export const StyledTr = styled.tr`
	height: 40px;
`;

export const StyledTh = styled.th`
	height: 70px;
	padding: 10px;
`;

export const StyledTbody = styled.tbody`
	margin-top: 20px;
`;

export const StyledTd = styled.td`
	text-align: center;
	padding: 10px;
	border-top: 1px solid #dddd;
`;

export const CategorySpan = styled.span`
	padding: 5px;
	margin-left: 20px;
	background-color: white;
	color: black;
	
	&.sorted::after {
		content: '>';
		position: absolute;
		margin-left: 5px; 
		font-size: 14px;
		transform: rotate(-90deg);
		transition: transform 0.3s ease-in-out; 
	}
	
	&.sorted.desc::after {
		transform: rotate(90deg); 
	}

	cursor: pointer;

`;
