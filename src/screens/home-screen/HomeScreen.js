import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonList } from '../../redux/slices/pokemonSlice'
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner'
import PokemonListItem from '../../components/pokemon-list-item/PokemonListItem'

const HomeScreen = () => {
	const dispatch = useDispatch()

	const { pokemon_list, is_loading } = useSelector(store => store.pokemon)

	useEffect(() => {
		dispatch(fetchPokemonList())
	}, [dispatch])

	const renderPokemon = () => {
		if (is_loading) {
			return <LoadingSpinner />
		}
		if (pokemon_list !== []) {
			return pokemon_list.map(pokemon =>  <PokemonListItem key={pokemon.name} name={pokemon.name}/>)
		}
	}

	return (
		<div className='w-full pt-10'>
			{renderPokemon()}
		</div>
	)
}

export default HomeScreen