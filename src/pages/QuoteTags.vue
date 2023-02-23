<template>
	<div class="sorted-quotes">
		<div class="container">
			<loader v-if="tagsStore.loader" />
			<div v-else class="sorted-quotes__content">
				<div>
					<label for="tags"> Sort by tag: </label>
					<Select v-model="selectedTag" :options="tagsStore.tags" id="tags" />
				</div>
			</div>
			<Quote v-for="quote in tagsStore.sortedByTag" :key="quote._id" :quote="quote" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useTagsStore } from "../stores/tagsStore";
import { onMounted } from 'vue'
import Quote from "@/components/Quote.vue";
import Select from "@/components/ui/Select.vue";
import Loader from "@/components/ui/Loader.vue";

const tagsStore = useTagsStore();

const selectedTag = ref('')

onMounted((): void => {
	tagsStore.loadTags()
})

watch(selectedTag, (newValue) => {
	tagsStore.sortByTag(selectedTag.value)
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