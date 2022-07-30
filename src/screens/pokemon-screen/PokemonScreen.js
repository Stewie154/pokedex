import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PokemonScreen = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	console.log(selected_pokemon)
  return (
	<div>
		{selected_pokemon.name}
	</div>
  )
}

export default PokemonScreen