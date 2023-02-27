import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonList, removeSelectedPokemon } from '../../redux/slices/pokemonSlice'
import { useNavigate } from "react-router-dom";


const ErrorScreen = () => {
	const navigate = useNavigate()
	const theme = useSelector(state => state.pokemon.theme)
	const error = useSelector(state => state.pokemon.error)
	const selected_pokemon = useSelector(state => state.pokemon.selected_pokemon)
	const dispatch = useDispatch()

	const handleRefreshClick =  () => {
		if (selected_pokemon) {
			dispatch(removeSelectedPokemon())
		}	
		navigate("/")
		dispatch(fetchPokemonList())
	}

	return (
		<div className="w-full h-full py-5 flex flex-col items-center justify-center">
			<h1 className="text-3xl md:text-5xl pb-3">An Error Occurred</h1>
			<h3 className="text-xl md:text-3xl">Name: {error}</h3>
			<img 
				className="w-10/12 sm:w-8/12"
				src="/images/pikachu-meme.png"
				alt="pikachu" 
			/>
			<img
				className="w-[60px] md:hover:opacity-70 cursor-pointer"
				src={`/images/icons/refresh-${theme}-mode.svg`}
				onClick={() => handleRefreshClick()}
			/>
		</div>
	)
}

export default ErrorScreen