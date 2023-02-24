<template>
	<div class="loader-section">
		<div class="loader" />
	</div>
</template>

<style lang="scss" scoped>
.loader-section {
	display: flex;
	justify-content: center;
	align-items: center;

	min-height: 50vh;

	.loader {
		width: 40px;
		height: 40px;

		border: 4px solid transparent;
		border-top-color: #5d5d5d;
		border-right-color: #5d5d5d;
		border-radius: 50%;

		animation: spinner 1s linear infinite;
	}
}


@keyframes spinner {
	100% {
		transform: rotate(360deg);
	}
}
</style>