import React from 'react'
import RouterComponent from '../router/RouterComponent'
import Header from '../header/Header'

const App = () => {
	return (
		<div className="container w-full max-w-[700px] h-[80vh] bg-primary px-10 mx-2 sm:mx-10 rounded-lg border-container">
			<Header />
			<RouterComponent/>
		</div>
	);
}

export default App

