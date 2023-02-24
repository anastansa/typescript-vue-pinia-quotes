import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
//@ts-ignore
import type { Quote } from "@/types/Quote";

export const useSearchStore = defineStore("searchStore", () => {

	const searchQuotes = ref([] as Quote[])
	let loader = ref(false)

	const getQuotes = async (search: string) => {
		loader.value = true
		try {
			const response = await axios.get('https://api.quotable.io/search/quotes', {
				params: {
					query: search
				}
			})
			searchQuotes.value = response.data.results
		} catch (e) {
			console.log(e)
		} finally {
			loader.value = false
		}
	}

	return {
		searchQuotes,
		loader,
		getQuotes
	};
});
