import React from 'react';
import { StyledTable, StyledThead, StyledTr, StyledTh, CategorySpan, StyledTbody, StyledTd } from './Table.styled';

const Table = ({ columnNames, data }) => {
	return (
		<StyledTable>
			<StyledThead>
				<StyledTr>
					{columnNames.map((columnName) => (
						<StyledTh key={columnName}>
							<CategorySpan>{columnName}</CategorySpan>
						</StyledTh>
					))}
				</StyledTr>
			</StyledThead>
			<StyledTbody>
				{data.map((item) => (
					<StyledTr key={item.id}>
						{columnNames.map((columnName) => (
							<StyledTd key={columnName}>{item[columnName]}</StyledTd>
						))}
					</StyledTr>
				))}
			</StyledTbody>
		</StyledTable>
	);
};

export default Table;
