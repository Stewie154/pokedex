import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PokemonScreen = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const {name, height, weight} = selected_pokemon
	console.log(selected_pokemon)
	const image = selected_pokemon.sprites.other.dream_world.front_default
  return (
	<div>
		<section className='w-full flex justify-between mt-5'>
			<img src={image} alt={name} className="w-4/12"/>
			<div className='w-7/12'>
				<h2 className='capitalize underline text-4xl text-center mb-10'>{name}</h2>
				<p className="text-2xl mb-5">Height: {height * 10} cm</p>
				<p className="text-2xl">Weight: {weight / 10} kg</p>
			</div>
		</section>
		
	</div>
  )
}

export default PokemonScreen