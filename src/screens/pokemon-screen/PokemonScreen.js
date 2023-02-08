import React from 'react'
import { useSelector } from 'react-redux'
import BackIcon from '../../components/icon-components/back-icon/BackIcon'
import CycleBackIcon from '../../components/icon-components/cycle-back-icon/CycleBackIcon'
import CycleForwardIcon from '../../components/icon-components/cycle-forward-icon/CycleForwardIcon'
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner'
import { Fade } from 'react-reveal'
import { Zoom } from 'react-reveal'

const PokemonScreen = () => {
	const is_loading = useSelector(state => state.pokemon.is_loading)
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const theme = useSelector(state => state.pokemon.theme)
	const { name, height, weight, types, stats } = selected_pokemon
	const image = selected_pokemon.sprites.other.dream_world.front_default

	const renderTypes = (types) => {
		return types.map((type_item, key) => {
			return <p className="mb-3 text-sm sm:text-2xl capitalize text-left mr-6" key={key}>{type_item.type.name}</p>
		})
	}

	const renderStats = (stats) => {
		return stats.map((stat, key) => {
			return (
				<p className="mb-3 text-sm sm:text-xl capitalize text-center" key={key}>{stat.stat.name}: {stat.base_stat}</p>
			)
		})
	}


	return (
		<>
			{is_loading && <LoadingSpinner />}
			<Fade>
				<div className={`${is_loading ? 'hidden' : 'relative h-[90%] flex flex-col overflow-scroll pt-5'}`}>
					<section className="w-full flex flex-row-reverse justify-between">
						<Zoom>
							<div
								style={{ backgroundImage: `url(${image})` }}
								className="w-full md:w-6/12 pb-[75%] sm:pb-[55%] bg-center bg-contain bg-no-repeat"
							>
							</div>
						</Zoom>
						<div className="flex flex-grow flex-col justify-start">
							<BackIcon />
							<div>
								<h2 className="capitalize underline text-4xl text-left mb-6">{name}</h2>
								<div className="flex items-center">
									{renderTypes(types)}
								</div>
								<p className="mb-3 sm:text-xl text-left w-full">Height: {height * 10} cm</p>
								<p className="mb-3 sm:text-xl text-left w-full">Weight: {weight / 10} kg</p>
							</div>
						</div>
					</section>
					<section className={`w-full mt-5 flex-grow flex flex-col justify-evenly border-t ${theme}-mode-border-color-secondary`}>
						<div>
							<h3 className="w-full capitalize text-2xl sm:text-3xl text-center mb-5">Stats</h3>
							<div className={`w-full grid grid-cols-2 md:grid-cols-3 gap-3`}>
								{renderStats(stats)}
							</div>
						</div>
						<div className="w-full flex justify-center items-center">
							<CycleBackIcon />
							<CycleForwardIcon />
						</div>
					</section>
				</div>
			</Fade>
		</>
	)
}

export default PokemonScreen