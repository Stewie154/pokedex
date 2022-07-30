import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PokemonScreen = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	console.log(selected_pokemon)
	const image = selected_pokemon.sprites.other.dream_world.front_default
  return (
	<div>
		{selected_pokemon.name}
		<img src={image} />
	</div>
  )
}

export default PokemonScreen