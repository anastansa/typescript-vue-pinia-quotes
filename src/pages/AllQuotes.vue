<template>
	<div class="all">
		<div class="container">
			<loader v-if="quotesStore.loader" />
			<div v-else>
				<div v-if="favoritesStore.favorites.length" class="favorite">
					<div class="favorite__title">
						Favorite quotes (count: {{ favoritesStore.favorites.length }}) </div>
					<Quote v-for="quote in favoritesStore.favorites" :key="quote._id" :quote="quote"
						@toggle-favorite="favoritesStore.toggleFavorite(quote)" />
				</div>
				<div class="all__title"> All quotes:</div>
				<Quote v-for="quote in quotesStore.quotes" :key="quote._id" :quote="quote"
					@toggle-favorite="favoritesStore.toggleFavorite(quote)" />
				<div class="all__btn">
					<custom-button @click="quotesStore.loadMoreQuotes"> Load more </custom-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useQuotesStore } from "../stores/quotesStore";
import { useFavoritesStore } from "../stores/favoritesStore";
import { onMounted, ref } from 'vue'
import Loader from "@/components/ui/Loader.vue";
import Quote from "@/components/Quote.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

const quotesStore = useQuotesStore();
const favoritesStore = useFavoritesStore();

onMounted((): void => {
	quotesStore.loadAllQuotes()
})

</script>

<style lang="scss" scoped>
.all {
	margin: 0 auto 20px auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.favorite {
    margin-bottom: 100px;

		.favorite__title {
			font-size: 18px; 
			font-weight: 500; 
			margin-bottom: 10px;
		}
	}
	.all__title {
		font-size: 18px; 
	  font-weight: 500; 
  	margin-bottom: 10px;
	}
	.all__btn {
		text-align: center;
	}
}
</style>
