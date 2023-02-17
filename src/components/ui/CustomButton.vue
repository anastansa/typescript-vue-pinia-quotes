<template>
	<div class="button">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	width: max-content;
	cursor: pointer;
	padding: 15px 20px;
	border-radius: 8px;
	border: none;
	outline: none;
	font-size: 15px;
	font-weight: 500;

	color: black;
	background: transparent;
	box-shadow: 0 0 6px 0 rgb(0 0 0 / 20%);
	z-index: 1;

	&::before {
		position: absolute;
		content: "";

		width: 100%;
		height: 0;
		top: 0;
		left: 0;
		z-index: -1;

		border-radius: 8px;
		background: linear-gradient(315deg, rgba(47, 45, 45, 0.97) 0%, #383838 44%);
		transition: all 0.3s ease;
	}

	&:hover {
		color: white;

		&::before {
			top: auto;
			bottom: 0;
			height: 100%;
		}
	}
}
</style>