<template>
	<div class="search">
		<div class="container">

		</div>
	</div>
</template>

<script setup lang="ts">
import { useQuotesStore } from "../stores/quotesStore";


const quotesStore = useQuotesStore();

</script>

<style lang="scss" scoped>
.search {
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>