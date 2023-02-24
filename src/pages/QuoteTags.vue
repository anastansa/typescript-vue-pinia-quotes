<template>
	<div class="sorted-quotes">
		<div class="container">
			<loader v-if="tagsStore.loader" />
			<div v-else>
				<div class="sorted-quotes__content">
					<label for="tags"> Sort by tag: </label>
					<Select v-model="selectedTag" :options="tagsStore.tags" id="tags" />
				</div>
				<Quote v-for="quote in tagsStore.sortedByTag" key="quote._id" :quote="quote"
					@toggle-favorite="favoritesStore.toggleFavorite(quote)" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useTagsStore } from "../stores/tagsStore";
import { useFavoritesStore } from "../stores/favoritesStore";
import Quote from "@/components/Quote.vue";
import Select from "@/components/ui/MySelect.vue";
import Loader from "@/components/ui/MyLoader.vue";


const tagsStore = useTagsStore();
const favoritesStore = useFavoritesStore();

const tagStorage = sessionStorage.getItem('selectedTag')
const selectedTag = ref(tagStorage ? tagStorage : '')

onMounted((): void => {
	tagsStore.loadTags()
	tagsStore.sortByTag(selectedTag.value)
})

watch(selectedTag, (newValue) => {
	tagsStore.sortByTag(selectedTag.value)
	sessionStorage.setItem('selectedTag', selectedTag.value);
})

</script>

<style lang="scss" scoped>
.sorted-quotes {
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.sorted-quotes__content {
		margin-bottom: 20px;

		label {
			font-size: 18px;
		}
	}
}
</style>