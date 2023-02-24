<template>
	<div class="random">
		<div class="container">
			<loader v-if="randomStore.loader" />
			<div v-else>
				<Quote :quote="randomStore.randomQuote"
					@toggle-favorite="favoritesStore.toggleFavorite(randomStore.randomQuote)" />
				<CustomButton @click="randomStore.loadRandomQuote"> One more quote </CustomButton>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRandomStore } from "../stores/randomStore";
import { useFavoritesStore } from "../stores/favoritesStore";
import Quote from "@/components/Quote.vue";
import { onMounted } from 'vue'
import CustomButton from "@/components/ui/CustomButton.vue";
import Loader from "@/components/ui/MyLoader.vue";

const randomStore = useRandomStore();
const favoritesStore = useFavoritesStore();

onMounted((): void => {
	randomStore.loadRandomQuote()
})

</script>

<style lang="scss" scoped>
.random {
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>