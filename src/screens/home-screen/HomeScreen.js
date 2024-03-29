import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner'
import PokemonListItem from '../../components/pokemon-list-item/PokemonListItem'
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {

	const { pokemon_list, is_loading, error } = useSelector(store => store.pokemon)
	const navigate = useNavigate()

	useEffect(() => {
		if (error !== null) {
			navigate("/error")
		}
	}, [error])


	const renderPokemon = () => {
		if (is_loading) {
			return <LoadingSpinner />
		}
		if (pokemon_list !== []) {
			let fadeDelay = 0
			return pokemon_list.map(pokemon => {
				if (pokemon.being_displayed) {
					fadeDelay = fadeDelay + 35
					return <PokemonListItem key={pokemon.name} name={pokemon.name} url={pokemon.url} fadeDelay={fadeDelay}/>
				}
			})
		}
	}

	return (
		<>
			<div className='w-full h-[80%] flex flex-col justify-evenly overflow-scroll'>
				{renderPokemon()}
			</div>
		</>
	)
}

export default HomeScreen