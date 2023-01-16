export const getLastDisplayedPokemon = (pokemon_list) => {
	if (pokemon_list !== []) {
		let last_displayed_pokemon
		for (let index = pokemon_list.length - 1; index >= 0; index--) {
			if (pokemon_list[index].being_displayed === true) {
				last_displayed_pokemon = pokemon_list[index]
				return last_displayed_pokemon
			}
		}
	}
}