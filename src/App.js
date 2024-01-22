import React from 'react';
import CustomTable from './containers/CustomTable';
import { users } from './db/users';

import { StyledPage } from './styles/app.styled';
import GlobalStyles from './styles/GlobalStyles';


function App() {
	return (
		<>
			<GlobalStyles />
			<StyledPage className='App'>
				<CustomTable
					data={users}
					rowsPerPage={5}
					search={true}
					sorting={true}
				/>
			</StyledPage>
		</>
	);
}

export default App;
