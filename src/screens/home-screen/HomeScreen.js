import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner'
import PokemonListItem from '../../components/pokemon-list-item/PokemonListItem'
import Pagination from '../../components/pagination/Pagination'


const HomeScreen = () => {

	const { pokemon_list, is_loading } = useSelector(store => store.pokemon)
	const [fadeDelay, setFadeDelay] = useState(0)

	useEffect(() => {

	}, [fadeDelay])

	const renderPokemon = () => {
		let delay = 0
		if (is_loading) {
			return <LoadingSpinner />
		}
		if (pokemon_list !== []) {
			return pokemon_list.map(pokemon => pokemon.being_displayed && <PokemonListItem key={pokemon.name} name={pokemon.name} url={pokemon.url} fadeDelay={fadeDelay}/>)
		}
	}

	return (
		<>
			<div className='w-full h-[80%] flex flex-col justify-evenly overflow-scroll'>
				{renderPokemon()}
			</div>
			<Pagination />
		</>
		
	)
}

export default HomeScreen