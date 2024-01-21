import React, { useState } from 'react';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import SearchBox from '../components/SearchBox/SearchBox';

const CustomTable = ({ data, rowsPerPage, search, sorting }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [sortedData, setSortedData] = useState(data);
	const [sortDirection, setSortDirection] = useState('asc');
	const [sortColumn, setSortColumn] = useState(null);

	const columnNames = Object.keys(data[0]);

	const startIndex = (currentPage - 1) * rowsPerPage;
	const endIndex = startIndex + rowsPerPage;
	const currentData = sortedData.slice(startIndex, endIndex);
	const totalPages = Math.ceil(sortedData.length / rowsPerPage);

	const handleSort = (columnKey) => {
		if (!sorting) return;

		const direction = sortColumn === columnKey && sortDirection === 'asc' ? 'desc' : 'asc';

		const sorted = [...data].sort((a, b) => {
			if (a[columnKey] < b[columnKey]) return direction === 'asc' ? -1 : 1;
			if (a[columnKey] > b[columnKey]) return direction === 'asc' ? 1 : -1;
            return 0;
		});
        
		setSortColumn(columnKey);
		setSortDirection(direction);
		setSortedData(sorted);
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleSearch = (inptValue) => {
		const filteredData = data.filter((item) => {
			for (const columnName of columnNames) {
				const cellValue = String(item[columnName]).toLowerCase();
				if (cellValue.includes(inptValue.toLowerCase())) {
					return true;
				}
			}
			return false;
		});
		setSortedData(filteredData);
	};

	return (
		<>
			{search && <SearchBox handleSearch={handleSearch} />}
			<Table
				columnNames={columnNames}
				currentData={currentData}
				handleSort={handleSort}
			/>
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</>
	);
};

export default CustomTable;
