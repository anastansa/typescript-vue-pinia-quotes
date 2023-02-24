<template>
	<div class="search">
		<div class="container">
			<form @submit.prevent="searchStore.getQuotes(searchQuote)">
				<input type="text" class="search__input" placeholder="type here" v-model="searchQuote" />
				<CustomButton @click="searchStore.getQuotes(searchQuote)" class="search__btn"> 
					Search quotes 
				</CustomButton>
			</form>
			<Loader v-if="searchStore.loader" />
			<div v-else>
				<Quote v-for="quote of searchStore.searchQuotes" :key="quote._id" :quote="quote"
					@toggle-favorite="quotesStore.toggleFavorite(quote)" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from "../stores/searchStore";
import { useQuotesStore } from "../stores/quotesStore";
import { ref } from 'vue'
import Loader from "@/components/ui/Loader.vue";
import Quote from "@/components/Quote.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

const searchStore = useSearchStore();
const quotesStore = useQuotesStore();
const searchQuote = ref('')

</script>

<style lang="scss" scoped>
.search {
	margin: 0 auto 20px auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

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
</style>
