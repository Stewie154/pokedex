import React from 'react'
import { useSelector } from 'react-redux'
import BackIcon from '../../components/icon-components/back-icon/BackIcon'

const PokemonScreen = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const theme = useSelector(state => state.pokemon.theme)
	const { name, height, weight, types, stats } = selected_pokemon
	const image = selected_pokemon.sprites.other.dream_world.front_default

	const renderTypes = (types) => {
		return types.map((type_item, key) => {
			return <p className="mb-3 text-sm sm:text-2xl capitalize text-left w-full w-6/12" key={key}>{type_item.type.name}</p>
		})
	}

	const renderStats = (stats) => {
		return stats.map((stat, key) => {
			return (
				<p className="mb-3 text-sm sm:text-xl uppercase text-center" key={key}>{stat.stat.name}: {stat.base_stat}</p>
			)
		})
	}

	return (
		<div className="relative h-5/6 overflow-scroll py-5">
			<BackIcon />
			<section className="w-full flex flex-row-reverse justify-between mt-14">
				<div
					style={{ backgroundImage: `url(${image})` }}
					className="w-full md:w-6/12 pb-[75%] sm:pb-[40%] bg-center bg-contain bg-no-repeat"
				>
				</div>
				<div className="flex flex-grow flex-col justify-between">
					<h2 className="capitalize underline text-4xl text-left mb-7">{name}</h2>
					<div className="w-full flex items-center">
						{renderTypes(types)}
					</div>
					<p className="mb-3 sm:text-xl text-left w-full">Height: {height * 10} cm</p>
					<p className="mb-3 sm:text-xl text-left w-full">Weight: {weight / 10} kg</p>
				</div>
			</section>
			
				<div className='w-full mt-10 flex flex-wrap items-center justify-center'>
					<div className={`w-full grid grid-cols-2 md:grid-cols-3 gap-3 border-t ${theme}-mode-border-color-secondary`}>
						{renderStats(stats)}
					</div>
				</div>
			
		</div>
	)
}

export default PokemonScreen