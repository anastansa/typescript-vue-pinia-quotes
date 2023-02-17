<template>
	<div class="all">
		<div class="container">
			<Quote v-for="quote in quotesStore.quotes" :key="quote._id" :quote="quote" 
			@toggle-favorite="quotesStore.toggleFavorite(quote)"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useQuotesStore } from "../stores/quotesStore";
import { onMounted } from 'vue'
// @ts-ignore
import Quote from "@/components/Quote.vue";

const quotesStore = useQuotesStore();

onMounted((): void => {
	quotesStore.loadAllQuotes()
})

</script>

<style scoped>
.all {
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
