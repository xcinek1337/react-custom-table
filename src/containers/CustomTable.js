import React, { useState } from 'react';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import SearchBox from '../components/SearchBox/SearchBox';

const CustomTable = ({ data, rowsPerPage, search }) => {
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

	const handleSearch = (inptValue) => {
		const filteredData = data.filter((item) => {
			for (const columnName of columnNames) {
				const cellValue = String(item[columnName]).toLowerCase();
				// zamienia wszystkie dane z obiektu Data na 'stingi' + lowercase zeby input nie byl wrazliwy na wielkosc znakow
				if (cellValue.includes(inptValue.toLowerCase())) {
					return true;
                    // jesli ciag znakow jest w zbiorze data to zwraca true = czyli zostaje w filteredData
				}
			}
			return false;
            //jesli takiego ciagu nie ma to zwraca false i nie wrzuca nic pod fildetedrData
		});
		setSortedData(filteredData);
	};

	return (
		<>
			{search && <SearchBox handleSearch={handleSearch} />}
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
