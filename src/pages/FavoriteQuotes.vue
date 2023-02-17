<template>
	<div class="favorite">
		<div class="container">
			<loader v-if="quotesStore.loader" />
			<div v-else-if="quotesStore.favorites.length">
				<Quote v-for="quote in quotesStore.favorites" :key="quote._id" :quote="quote"
					@toggle-favorite="quotesStore.toggleFavorite(quote)" />
			</div>
			<div v-else class="favorite__message">
				<p class="favorite__message-content">
					Oops! You don't have any favorite quotes yet...
				</p>
				<router-link to="/">
					<custom-button> See all quotes </custom-button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useQuotesStore } from "../stores/quotesStore";
import CustomButton from "@/components/ui/CustomButton.vue";
import Loader from "@/components/ui/Loader.vue";

// @ts-ignore
import Quote from "@/components/Quote.vue";

const quotesStore = useQuotesStore();

</script>

<style lang="scss" scoped>
.favorite {
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.favorite__message {
		text-align: center;

		.favorite__message-content {
			font-size: 20px;
			margin-bottom: 40px;
		}
	}
}
</style>