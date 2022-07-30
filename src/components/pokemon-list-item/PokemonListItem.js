import React, {useState} from 'react'

const PokemonListItem = ({name, url}) => {
	const [hovering, setHovering] = useState(false)
	const handleHover = () => {
		setHovering(!hovering)
	}
	return (
		<div 
			className="flex justify-between items-center py-3 cursor-pointer hover:border-b border-color-secondary" 
			onMouseEnter={() => handleHover()}
			onMouseLeave={() => handleHover()}
		>
			<h2 className="text-3xl hover:opacity-50">{name}</h2>
			<img src='/images/pokeball.png' className={`w-10 ${hovering && 'animate-spin'}`} alt="pokeball"/>
		</div>
	)
}

export default PokemonListItem