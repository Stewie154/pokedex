import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSinglePokemon } from '../../redux/slices/pokemonSlice'

const PokemonListItem = ({name, url}) => {
	const [hovering, setHovering] = useState(false)

	const pokemon = useSelector(store => store.pokemon)

	const dispatch = useDispatch()

	const handleHover = () => {
		setHovering(!hovering)
	}

	const handleClick = (url) => {
		dispatch(fetchSinglePokemon(url))
	}
	return (
		<div 
			className="flex justify-between items-center py-3 cursor-pointer hover:border-b border-color-secondary" 
			onMouseEnter={() => handleHover()}
			onMouseLeave={() => handleHover()}
			onClick={() => handleClick(url)}
		>
			<h2 className="text-3xl hover:opacity-50">{name}</h2>
			<img src='/images/pokeball.png' className={`w-10 ${hovering && 'animate-spin'}`} alt="pokeball"/>
		</div>
	)
}

export default PokemonListItem