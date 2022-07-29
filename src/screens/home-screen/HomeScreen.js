import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonList } from '../../redux/slices/pokemonSlice'
import Header from '../../components/header/Header'
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const { pokemon_list, is_loading } = useSelector(store => store.pokemon)

	useEffect(() => {
		dispatch(fetchPokemonList())
	}, [])

	const renderPokemon = () => {
		if (is_loading) {
			return <LoadingSpinner />
		}
		if (pokemon_list !== []) {
			return pokemon_list.map(pokemon => <p>{pokemon.name}</p>)
		}
	}

	return (
		<div>
			<Header />
			{renderPokemon()}
		</div>
	)
}

export default HomeScreen