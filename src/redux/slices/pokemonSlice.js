import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
	pokemon_list: [],
	is_loading: true,
	selected_pokemon: {},
	error: ''
}

export const fetchPokemonList = createAsyncThunk(
	'pokemon/fetchPokemonList',
	async () => {
		try {
			const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
			return response.data
		}
		catch (error) {
			return error
		}
	}
)

export const fetchSinglePokemon = createAsyncThunk(
	'pokemon/fetchSinglePokemon',
	async (pokemon_url) => {
		try {
			const response = await axios.get(pokemon_url)
			return response.data
		} catch (error) {
			return error
		}
	}
)

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState: initialState,
	reducers: {
		selectPokemon: (state, action) => {
			state.selected_pokemon = action.payload
		}
	},
	extraReducers: {
		[fetchPokemonList.pending]: (state) => {
			state.is_loading = true
		},
		[fetchPokemonList.fulfilled]: (state, action) => {
			console.log(action)
			state.is_loading = false
			state.pokemon_list = action.payload.results
		},
		[fetchPokemonList.rejected]: (state, action) => {
			state.is_loading = false
			state.error = action.payload
		},
		[fetchSinglePokemon.pending]: (state) => {
			state.is_loading = true
		},
		[fetchSinglePokemon.fulfilled]: (state, action) => {
			state.is_loading = false
			state.selected_pokemon = action.payload
			console.log(action.payload)
		},
		[fetchSinglePokemon.rejected]: (state, action) => {
			state.is_loading = false
			console.log(action.payload)
		}
	}
})

export default pokemonSlice.reducer

