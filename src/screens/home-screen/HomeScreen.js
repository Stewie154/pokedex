import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from '../../redux/slices/pokemonSlice'
import Header from '../../components/header/Header'

export default function HomeScreen() {
	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchPokemon())
	}, [])

	return (
		<div>
			<Header />
		</div>
	)
}
