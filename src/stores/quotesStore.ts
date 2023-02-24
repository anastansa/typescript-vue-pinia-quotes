import { ref, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Quote } from "@/types/Quote";

export const useQuotesStore = defineStore("quotesStore", () => {

	const quotes = ref([] as Quote[])
	const loader = ref(false)
	const pageNumber = ref(1)

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

	return {
		quotes,
		loader,
		pageNumber,
		loadAllQuotes,
		loadMoreQuotes,
	};
});
