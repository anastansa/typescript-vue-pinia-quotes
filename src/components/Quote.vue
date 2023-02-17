<template>
	<div class="quote">
		<div class="like" @click="toggleFavorite(quote)">
			<img v-if="quote.isFavorite" src="@/assets/img/like-full.svg" alt="favorite">
			<img v-else src="@/assets/img/like.svg" alt="like">
		</div>
		<div class="quote__content">
			"{{ quote.content }}"
		</div>
		<div class="quote__author">
			{{ quote.author }}
		</div>
	</div>
</template>

<script setup lang="ts">
// @ts-ignore
const props = defineProps({
	quote: {
		type: Object,
		required: true,
		default: () => {}
	}
})

const emit = defineEmits(['toggleFavorite'])

const toggleFavorite = (quote: object): void => {
	emit('toggleFavorite', quote)
}

</script>

<style lang="scss" scoped>
.quote {
	min-height: 145px;
	padding: 20px;
	margin-bottom: 30px;
	border: 2px solid black;

	.like {
		text-align: end;
		img {
			width: 20px;
			height: 20px;
		}
	}
	.quote__content {
		margin-bottom: 10px;
		font-size: 20px;
		font-weight: 500;
		font-style: italic;
	}

	.quote__author {
		font-size: 16px;
	}

	.quote__tag {
		font-size: 14px;
		font-weight: 600;
		opacity: 0.7;
	}
}
</style>