import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemonList } from '../../redux/slices/pokemonSlice'

const Pagination = () => {
	const { next_url, prev_url } = useSelector(store => store.pokemon)

	const dispatch = useDispatch()

	const handleNextBtnClick = () => {
		dispatch(fetchPokemonList(next_url))
	}

	const handlePrevBtnClick = () => {
		dispatch(fetchPokemonList(prev_url))
	}
	
	return (
		<div className="h-[10%] flex justify-around items-center">
			<button 
				className={`${prev_url === null && 'hidden'} bg-secondary text-lg font-bold px-7 py-2 border rounded-lg transition-all duration-400`}
				onClick={() => handlePrevBtnClick()}
			>
				Prev
			</button>
			<button 
				className="bg-secondary text-lg font-bold px-7 py-2 border rounded-lg transition-all duration-400"
				onClick={() => handleNextBtnClick()}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination