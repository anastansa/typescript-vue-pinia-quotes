import { ref, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Quote } from "@/types/Quote";

export const useFavoritesStore = defineStore("favoritesStore", () => {

	const favorites = ref([] as Quote[])

	const favStorage = localStorage.getItem('favStorage');
	if (favStorage) {
		favorites.value = JSON.parse(favStorage)._value;
	}

	const toggleFavorite = (quote: Quote): void => {
		const found = favorites.value.find(el => el._id === quote._id)
		if (found) {
			favorites.value = favorites.value.filter(el => el._id !== quote._id)
			quote.isFavorite = false
		} else {
			favorites.value.push(quote)
			quote.isFavorite = true
		}
	}

	watch(
		() => favorites,
		(newValue) => {
			localStorage.setItem('favStorage', JSON.stringify(newValue));
		},
		{ deep: true }
	);

	return {
		favorites,
		toggleFavorite
	};
});
