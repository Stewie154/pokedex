import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { displayNextList } from '../../redux/slices/pokemonSlice'

const Pagination = () => {
	const dispatch = useDispatch()

	const handleNextBtnClick = () => {
		dispatch(displayNextList())

	}

	const handlePrevBtnClick = () => {

	}
	
	return (
		<div className="h-[10%] flex justify-around items-center">
			<button 
				className={`bg-secondary text-lg font-bold px-7 py-2 border rounded-lg transition-all duration-400`}
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