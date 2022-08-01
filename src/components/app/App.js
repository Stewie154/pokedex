import React from 'react'
import RouterComponent from '../router/RouterComponent'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonList } from '../../redux/slices/pokemonSlice';
import FormComponent from '../form-component/FormComponent';

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPokemonList('https://pokeapi.co/api/v2/pokemon/'))
	}, [dispatch])
	return (
		<div className="container w-full max-w-[700px] h-[80vh] bg-primary px-10 mx-2 sm:mx-10 rounded-lg border-container">
			<RouterComponent />
			{/* <FormComponent /> */}
		</div>
	);
}

export default App

