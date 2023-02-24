import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Quote } from "@/types/Quote";

export const useSearchStore = defineStore("searchStore", () => {

	const searchQuotes = ref([] as Quote[])
	const loader = ref(false)
	const error = ref(false)

	const getQuotes = async (search: string) => {
		loader.value = true
		error.value = false
		try {
			const response = await axios.get('https://api.quotable.io/search/quotes', {
				params: {
					query: search
				}
			})
			searchQuotes.value = response.data.results

			if (!response.data.results.length) {
				error.value = true
			}
		} catch (e) {
			console.log(e)
			error.value = true
		} finally {
			loader.value = false
		}
	}

	return {
		searchQuotes,
		loader,
		error,
		getQuotes
	};
});
