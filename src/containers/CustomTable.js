import React, { useState } from 'react';
import Table from '../components/Table/Table';

const CustomTable = ({ data, rowsPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [sortedData, setSortedData] = useState(data);

	const columnNames = Object.keys(data[0]);
	const startIndex = (currentPage - 1) * rowsPerPage;
    // wyznacza od jakiego indexu ma wyswietlac elementy na danej stronie - czyli naprzyklad 1-1*5 = 0 czyli index startujacy to bedzie 0
    const endIndex = startIndex + rowsPerPage
    // wyznacza do jakiego indexu bedzie tworzona tabla na jednej stronie 0 + 5 = 5 indeksow 1 2 3 4 5
	const currentData = sortedData.slice(startIndex, endIndex);
    // slice wycina z wycina z tablicy elmenety do odpowiedniej currentPage 


	return (
		<Table
			columnNames={columnNames}
			currentData={currentData}
			rowsPerPage={rowsPerPage}
		/>
	);
};

export default CustomTable;
