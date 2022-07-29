import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from '../../screens/home-screen/HomeScreen'
import PokemonScreen from '../../screens/pokemon-screen/PokemonScreen'

const RouterComponent = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/:pokemon" element={<PokemonScreen />} />
			</Routes>
		</Router>
	)
}

export default RouterComponent
