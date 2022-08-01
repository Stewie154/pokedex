import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
	pokemon_list: [],
	is_loading: true,
	selected_pokemon: null,
	error: '',
	next_url: null,
	prev_url: null
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
		removeSelectedPokemon: (state) => {
			state.selected_pokemon = null
		}
	},
	extraReducers: {
		[fetchPokemonList.pending]: (state) => {
			state.is_loading = true
		},
		[fetchPokemonList.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.is_loading = false
			state.pokemon_list = action.payload.results
			state.next_url = action.payload.next
			state.prev_url = action.payload.prev
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
		},
		[fetchSinglePokemon.rejected]: (state, action) => {
			state.is_loading = false
		}
	}
})

export const { removeSelectedPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer

