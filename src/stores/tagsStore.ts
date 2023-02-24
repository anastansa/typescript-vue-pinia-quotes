import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Tag } from "@/types/Tag";
import type { Quote } from "@/types/Quote";

export const useTagsStore = defineStore("tagsStore", () => {

	const tags = ref([] as Tag[])
	const sortedByTag = ref([] as Quote[]);
	const loader = ref(false)

	const loadTags = async () => {
		loader.value = true
		try {
			const response = await axios.get('https://api.quotable.io/tags')
			tags.value = response.data
		} catch (e) {
			console.log(e)
		} finally {
			loader.value = false
		}
	}

	const sortByTag = async (tag: string) => {
		try {
			const response = await axios.get('https://api.quotable.io/quotes', {
				params: {
					tags: tag
				}
			})
			sortedByTag.value = response.data.results
		} catch (e) {
			console.log(e)
		}
	}


	return {
		tags,
		sortedByTag,
		loader,
		loadTags,
		sortByTag
	};
});
