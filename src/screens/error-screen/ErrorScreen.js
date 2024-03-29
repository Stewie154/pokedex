import React, { useEffect } from 'react'
import { Fade } from 'react-reveal';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonList, removeSelectedPokemon } from '../../redux/slices/pokemonSlice'
import { useNavigate } from "react-router-dom";


const ErrorScreen = () => {
	const navigate = useNavigate()
	const theme = useSelector(state => state.pokemon.theme)
	const error = useSelector(state => state.pokemon.error)
	const selected_pokemon = useSelector(state => state.pokemon.selected_pokemon)
	const dispatch = useDispatch()


	useEffect(() => {
		if (error === null) {
			navigate("/")
		}
	}, [error])

	const handleRefreshClick = () => {
		if (selected_pokemon) {
			dispatch(removeSelectedPokemon())
		}
		dispatch(fetchPokemonList())
	}

	return (
		<Fade>
			<div className="w-full h-[90%] py-5 flex flex-col items-center justify-center">
				<h1 className="text-center text-3xl md:text-5xl pb-3">An Error Occurred</h1>
				<h3 className="text-center text-xl md:text-3xl">Name: {error}</h3>
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
		</Fade>
	)
}

export default ErrorScreen