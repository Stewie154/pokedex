import React from 'react'
import RouterComponent from '../router/RouterComponent'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../../redux/slices/pokemonSlice';
import FormComponent from '../form-component/FormComponent';

const App = () => {
	const theme = useSelector(state => state.pokemon.theme)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPokemonList())
		document.body.classList.add(`${theme}-mode-bg-gradient`)
	}, [dispatch, theme])
	return (
		<div className={`container w-full max-w-[700px] h-[90vh] ${theme}-mode-bg-primary px-10 mx-2 sm:mx-10 rounded-lg ${theme}-mode-border-container`}>
			<RouterComponent />
			{/* <FormComponent /> */}
		</div>
	);
}

export default App

