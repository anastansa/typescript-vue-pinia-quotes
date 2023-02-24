<template>
	<input :type="props.type" v-model="props.modelValue" @input="changeValue" :placeholder="props.placeholder">
</template>

<script setup lang="ts">

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
		default: () => ''
	},
	type: {
		type: String,
		required: true
	},
	placeholder: {
		type: String,
		required: false,
		default: () => ''
	},
})

const emit = defineEmits(['update:modelValue'])

const changeValue = (event: Event) => {
	let target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value);
}

</script>

<style lang="scss" scoped>
input {
	width: 100%;
	height: 40px;
	padding: 0 10px;
	margin-bottom: 20px;
	border: 1px solid #c1c0c0;
	border-radius: 8px;
	font-size: 18px;
}
</style>