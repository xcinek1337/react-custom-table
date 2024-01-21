import React, { useState } from 'react';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';

const CustomTable = ({ data, rowsPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [sortedData, setSortedData] = useState(data);

	const columnNames = Object.keys(data[0]);
	const startIndex = (currentPage - 1) * rowsPerPage;
	// wyznacza od jakiego indexu ma wyswietlac elementy na danej stronie - czyli naprzyklad 1-1*5 = 0 czyli index startujacy to bedzie 0
	const endIndex = startIndex + rowsPerPage;
	// wyznacza do jakiego indexu bedzie tworzona tabla na jednej stronie 0 + 5 = 5 indeksow 1 2 3 4 5
	const currentData = sortedData.slice(startIndex, endIndex);
	// slice wycina z wycina z tablicy elmenety do odpowiedniej currentPage
	const totalPages = Math.ceil(sortedData.length / rowsPerPage);
	// ilosc elementow z tabeli / zachiacna ilosc na jednej stronie = ilosc stron
	
    const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
    
	return (
		<>
			<Table
				columnNames={columnNames}
				currentData={currentData}
				rowsPerPage={rowsPerPage}
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
