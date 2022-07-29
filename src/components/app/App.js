import React from 'react'
import RouterComponent from '../router/RouterComponent'
import Header from '../header/Header'
function App() {
	return (
		<div className="container w-full max-w-[700px] h-4/5 bg-primary p-10 mx-2 sm:mx-10 rounded-lg border-container">
			<Header />
			<RouterComponent/>
		</div>
	);
}

export default App;
