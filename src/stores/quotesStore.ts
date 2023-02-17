import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Quote } from "@/types/Quote";

export const useQuotesStore = defineStore("quotesStore", () => {

	const quotes = ref([] as Quote[])
	const randomQuote = ref({} as Quote)
	const favorites = ref([] as Quote[])

	const loadAllQuotes = async () => {
		try {
			const response = await axios.get('https://api.quotable.io/quotes')
			quotes.value = response.data.results
		} catch (e) {
			console.log(e)
		}
	}

	const loadRandomQuote = async () => {
		try {
			const response = await axios.get('https://api.quotable.io/random')
			randomQuote.value = response.data
		} catch (e) {
			console.log(e)
		}
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

	return {
		quotes,
		favorites,
		randomQuote,
		loadAllQuotes,
		loadRandomQuote,
		toggleFavorite
	};
});
