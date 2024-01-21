import React from 'react';
import CustomTable from './containers/CustomTable';

const users = [
	{ id: 1, name: 'John Doe', age: 25 },
	{ id: 2, name: 'Jane Smith', age: 30 },
	{ id: 3, name: 'Bob Johnson', age: 22 },
	{ id: 4, name: 'Alice Brown', age: 28 },
	{ id: 5, name: 'David Wilson', age: 35 },
	{ id: 6, name: 'Emily Davis', age: 29 },
	{ id: 7, name: 'Michael White', age: 26 },
	{ id: 8, name: 'Olivia Turner', age: 31 },
	{ id: 9, name: 'Christopher Harris', age: 27 },
	{ id: 10, name: 'Sophia Martinez', age: 24 },
	{ id: 11, name: 'Daniel Lee', age: 32 },
	{ id: 12, name: 'Ava Anderson', age: 33 },
	{ id: 13, name: 'Matthew Taylor', age: 23 },
	{ id: 14, name: 'Emma Wilson', age: 34 },
	{ id: 15, name: 'Nicholas Garcia', age: 30 },
	{ id: 16, name: 'Grace Robinson', age: 28 },
	{ id: 17, name: 'Ethan Martinez', age: 25 },
	{ id: 18, name: 'Avery Johnson', age: 29 },
	{ id: 19, name: 'Madison Clark', age: 26 },
	{ id: 20, name: 'Liam Davis', age: 27 },
];

function App() {
	return (
		<div className='App'>
			<CustomTable
				data={users}
			/>
		</div>
	);
}

export default App;
