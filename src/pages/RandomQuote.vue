<template>
	<div class="random">
		<div class="container">
			<Quote :quote="quotesStore.randomQuote" />
			<CustomButton @click="quotesStore.loadRandomQuote"> One more quote </CustomButton>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useQuotesStore } from "../stores/quotesStore";
// @ts-ignore
import Quote from "@/components/Quote.vue";
import { onMounted } from 'vue'
import CustomButton from "@/components/ui/CustomButton.vue";

const quotesStore = useQuotesStore();
onMounted((): void => {
	quotesStore.loadRandomQuote()
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