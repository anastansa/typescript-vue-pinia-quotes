import { ref, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Quote } from "@/types/Quote";

export const useRandomStore = defineStore("randomStore", () => {

	const randomQuote = ref({} as Quote)
	const loader = ref(false)

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

	return {
		randomQuote,
		loader,
		loadRandomQuote,
	};
});
