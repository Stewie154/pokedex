import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
	pokemon: [],
	is_Loading: true,
	selected_pokemon: {}
}

export const fetchPokemonList = createAsyncThunk(
	'pokemonStatus',
	async (state) => {
		try {
			const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
			return response.data
		} 
		catch (error) {
			return error
		}
	}
)

