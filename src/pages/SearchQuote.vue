<template>
	<div class="search">
		<div class="container">
			<form @submit.prevent="searchStore.getQuotes(searchQuote)" class="search__form">
				<input type="text" class="search__input" placeholder="type here" v-model="searchQuote" />
				<CustomButton @click="searchStore.getQuotes(searchQuote)" class="search__btn">
					Search quotes
				</CustomButton>
			</form>
			<Loader v-if="searchStore.loader" />
			<div v-else class="search__content">
				<div v-if="!searchStore.error">
					<Quote v-for="quote of searchStore.searchQuotes" :key="quote._id" :quote="quote"
						@toggle-favorite="favoritesStore.toggleFavorite(quote)" />
				</div>
				<div v-else class="search__error">
					Oops! No quotes found:( Please try again
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from "../stores/searchStore";
import { useFavoritesStore } from "../stores/favoritesStore";
import { ref, watch, onMounted } from 'vue'
import Loader from "@/components/ui/Loader.vue";
import Quote from "@/components/Quote.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

const searchStore = useSearchStore();
const favoritesStore = useFavoritesStore();

const searchStorage = sessionStorage.getItem('searchTag')
const searchQuote = ref(searchStorage ? searchStorage : '')

onMounted((): void => {
	searchStore.getQuotes(searchQuote.value)
})

watch(searchQuote, (newValue) => {
	searchStore.getQuotes(searchQuote.value)
	sessionStorage.setItem('searchTag', searchQuote.value);
})

</script>

<style lang="scss" scoped>
.search {
	margin: 0 auto 20px auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.search__form {
		.search__input {
			width: 100%;
			height: 40px;
			padding: 0 10px;
			margin-bottom: 20px;
			border: 1px solid #c1c0c0;
			border-radius: 8px;
			font-size: 18px;
		}

		.search__btn {
			margin-bottom: 30px;
		}
	}

	.search__content {
		.search__error {
			font-size: 20px;
		}
	}
}
</style>
