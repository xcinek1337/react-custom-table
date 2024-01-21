import React from 'react';
import Table from '../components/Table/Table';

const CustomTable = ({ data }) => {
	const columnNames = Object.keys(data[0]);

	return (
		<Table
			columnNames={columnNames}
			data={data}
		/>
	);
};

export default CustomTable;
