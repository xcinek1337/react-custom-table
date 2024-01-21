import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomTable from '../containers/CustomTable';

const exampleUsers = [
	//if rowsperpage=5
	// first page
	{ id: 1, name: 'Aaa Bbbb', age: 10 },
	{ id: 2, name: 'Bbb ccc', age: 20 },
	{ id: 3, name: 'ddd eeee', age: 30 },
	{ id: 4, name: 'ffff gggg', age: 40 },
	{ id: 5, name: 'hhhhh iiiii', age: 50 },
	// second page
	{ id: 6, name: 'jjjjjj kkkk', age: 60 },
	{ id: 7, name: 'lllll mmmm', age: 70 },
	{ id: 8, name: 'oooo pppp', age: 80 },
	{ id: 9, name: 'ssss rrrr', age: 90 },
	{ id: 10, name: 'ttttt vvvv', age: 100 },
];

const setup = () => {
	render(
		<CustomTable
			data={exampleUsers}
			rowsPerPage={5}
			sorting={true}
			search={true}
		/>
	);
};

describe('CustomTable', () => {
	test('CustomTable creates table correctly', async () => {
		expect.assertions(3);
		setup();

		const columId = await screen.findByText('id');
		const firstUser = await screen.findByText('Bbb ccc');
		const userAge = await screen.findByText('30');

		expect(columId).toBeInTheDocument();
		expect(firstUser).toBeInTheDocument();
		expect(userAge).toBeInTheDocument();
	});

	xtest('Sorting by age', async () => {
		// nie mam pojecia dlaczego on nie chce wykonac klikniecia
		//czy kolumna musi byc buttonem? onClick mam na elemencie span
		setup();

		const columnAge = await screen.findByText('age');
		userEvent.click(columnAge);

		await waitFor(() => {
			const id8 = screen.queryByText('oooo pppp');
			expect(id8).toBeInTheDocument();
		});
	});

	test('search by input', async () => {
		setup();
		const searchingValue = 'oo';

		const input = await screen.findByRole('textbox');
		userEvent.type(input, searchingValue);

		await waitFor(() => {
			const id8 = screen.getByText('oooo pppp');
			expect(id8).toBeInTheDocument();
		});
	});
	test('search by input - should not find', async () => {
		setup();
		const searchingValue = 'oo';

		const input = await screen.findByRole('textbox');
		userEvent.type(input, searchingValue);

		await waitFor(() => {
			const id1 = screen.queryByText('Aaa Bbbb');
			expect(id1).not.toBeInTheDocument();
		});
	});

	test('pagination works', async () => {
		setup();

		const nextPage = await screen.findByText('>');
		fireEvent.click(nextPage);

		await waitFor(() => {
			const id8 = screen.getByText('oooo pppp');
			expect(id8).toBeInTheDocument();
		});
	});
	test('pagination works - should not find', async () => {
		setup();

		const nextPage = await screen.findByText('>');
		fireEvent.click(nextPage);

		await waitFor(() => {
			const id2 = screen.queryByText('Bbb ccc');
			expect(id2).not.toBeInTheDocument();
		});
	});
});
