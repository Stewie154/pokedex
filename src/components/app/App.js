import React from 'react'
import RouterComponent from '../router/RouterComponent'
import Pagination from '../pagination/Pagination';

const App = () => {
	return (
		<div className="container w-full max-w-[700px] h-[80vh] bg-primary px-10 mx-2 sm:mx-10 rounded-lg border-container">
			<RouterComponent/>
			<Pagination />
		</div>
	);
}

export default App

