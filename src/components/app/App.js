import React from 'react'
import RouterComponent from '../router/RouterComponent'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../../redux/slices/pokemonSlice';

const App = () => {
	const theme = useSelector(state => state.pokemon.theme)
	const pokemon_list = useSelector(state => state.pokemon.pokemon_list)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPokemonList())
	}, [])

	useEffect(() => {
		if (pokemon_list === []) {
			dispatch(fetchPokemonList())
		}
		document.body.classList.add(`${theme}-mode-bg-gradient`)
		return () => document.body.classList.remove(`${theme}-mode-bg-gradient`)
	}, [dispatch, theme])
	return (
		<div className={`container w-full max-w-[700px] h-[90vh] ${theme}-mode-bg-primary px-10 mx-2 sm:mx-10 rounded-lg ${theme}-mode-border-container transition-all duration-400`}>
			<RouterComponent />
		</div>
	);
}

export default App

