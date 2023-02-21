import { ref, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Quote } from "@/types/Quote";

export const useQuotesStore = defineStore("quotesStore", () => {

	const quotes = ref([] as Quote[])
	const favorites = ref([] as Quote[])
	let randomQuote = ref({} as Quote)
	let loader = ref(false)
	let pageNumber = ref(1)

	const loadAllQuotes = async () => {
		loader.value = true
		try {
			const response = await axios.get('https://api.quotable.io/quotes', {
				params: {
					page: pageNumber.value
				}
			})
			quotes.value = response.data.results
		} catch (e) {
			console.log(e)
		} finally {
			loader.value = false
		}
	}

	const loadMoreQuotes = async () => {
		pageNumber.value += 1
		try {
			const response = await axios.get('https://api.quotable.io/quotes', {
				params: {
					page: pageNumber.value
				}
			})
			quotes.value = [...quotes.value, ...response.data.results]
			console.log(quotes.value)
		} catch (e) {
			console.log(e)
		} 
	}

	const loadRandomQuote = async () => {
		loader.value = true
		try {
			const response = await axios.get('https://api.quotable.io/random')
			randomQuote.value = response.data
		} catch (e) {
			console.log(e)
		} finally {
			loader.value = false
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
		loader,
		pageNumber,
		loadAllQuotes,
		loadRandomQuote,
		loadMoreQuotes,
		toggleFavorite
	};
});
