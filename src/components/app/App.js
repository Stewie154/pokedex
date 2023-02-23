import React from 'react'
import RouterComponent from '../router/RouterComponent'
import ErrorScreen from '../../screens/error-screen/ErrorScreen';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../../redux/slices/pokemonSlice';

const App = () => {
	const theme = useSelector(state => state.pokemon.theme)
	const pokemon_list = useSelector(state => state.pokemon.pokemon_list)
	const error = useSelector(state => state.pokemon.error)

	const dispatch = useDispatch()

	useEffect(() => {
		if (pokemon_list.length === 0) {
			dispatch(fetchPokemonList())
		}
	}, [])

	useEffect(() => {
		document.body.classList.add(`${theme}-mode-bg-gradient`)
		return () => document.body.classList.remove(`${theme}-mode-bg-gradient`)
	}, [dispatch, theme])
	console.log(error)
	return (
		<div className={`container w-full max-w-[700px] h-[90vh] max-h-[700px] ${theme}-mode-bg-primary px-5 sm:px-10 mx-2 sm:mx-10 rounded-lg ${theme}-mode-border-container transition-all duration-300`}>
			{error === null ? <RouterComponent /> : <ErrorScreen />}
		</div>
	);
}

export default App

