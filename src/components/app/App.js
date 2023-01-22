import React from 'react'
import RouterComponent from '../router/RouterComponent'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonList } from '../../redux/slices/pokemonSlice';
import FormComponent from '../form-component/FormComponent';

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPokemonList())
		document.body.classList.add('light-mode-bg-gradient')
	}, [dispatch])
	return (
		<div className="container w-full max-w-[700px] h-[90vh] light-mode-bg-primary px-10 mx-2 sm:mx-10 rounded-lg light-mode-border-container">
			<RouterComponent />
			{/* <FormComponent /> */}
		</div>
	);
}

export default App

