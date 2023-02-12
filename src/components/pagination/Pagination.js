import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { displayNextList, displayPreviousList } from '../../redux/slices/pokemonSlice'

const Pagination = () => {
	const theme = useSelector(state => state.pokemon.theme)
	const dispatch = useDispatch()
	const pokemon_list = useSelector(state => state.pokemon.pokemon_list)
	const first_pokemon_being_displayed = useSelector(state => state.pokemon.first_pokemon_being_displayed)
	const last_pokemon_being_displayed = useSelector(state => state.pokemon.last_pokemon_being_displayed)
	

	const handleNextBtnClick = () => {
		dispatch(displayNextList())
	}

	const handlePrevBtnClick = () => {
		dispatch(displayPreviousList())
	}
	
	return (
		<div className="w-full h-full flex justify-around items-center">
			<button 
				className={`${pokemon_list[0] === first_pokemon_being_displayed ? 'hidden' : `${theme}-mode-bg-secondary text-lg font-bold px-7 py-2 border rounded-lg transition-all duration-300`}`}
				onClick={() => handlePrevBtnClick()}
			>
				Prev
			</button>
			<button 
				className={`${pokemon_list[pokemon_list.length -1] === last_pokemon_being_displayed ? 'hidden' : `${theme}-mode-bg-secondary text-lg font-bold px-7 py-2 border rounded-lg transition-all duration-300`}`}
				onClick={() => handleNextBtnClick()}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination