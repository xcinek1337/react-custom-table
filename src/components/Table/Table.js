import React, { useState } from 'react';
import { StyledTable, StyledThead, StyledTr, StyledTh, CategorySpan, StyledTbody, StyledTd } from './Table.styled';

const Table = ({ columnNames, currentData, handleSort }) => {
	const [sortDirection, setSortDirection] = useState('asc');
	const [sortColumn, setSortColumn] = useState(null);

	const handleCategoryClick = (columnName) => {
		if (sortColumn === columnName) {
			setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
		} else {
			setSortColumn(columnName);
			setSortDirection('asc');
		}

		handleSort(columnName);
	};

	return (
		<StyledTable>
			<StyledThead>
				<StyledTr>
					{columnNames.map((columnName) => (
						<StyledTh key={columnName}>
							<CategorySpan
								onClick={() => handleCategoryClick(columnName)}
								className={sortColumn === columnName ? `sorted ${sortDirection}` : ''}
							>
								{columnName}
							</CategorySpan>
						</StyledTh>
					))}
				</StyledTr>
			</StyledThead>
			<StyledTbody>
				{currentData.map((item) => (
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
