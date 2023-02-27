<template>
	<select v-model="props.modelValue" @change="changeOption">
		<option disabled value=""> </option>
		<option v-for="option in props.options" :key="option._id" :value="option.name">
			{{ option.name }}
		</option>
	</select>
</template>

<script setup lang="ts">

import type { Tag } from '@/types/Tag';

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
		default: () => ''
	},
	options: {
		type: Array<Tag>,
		required: true,
		default: () => []
	}
})

const emit = defineEmits(['update:modelValue'])

const changeOption = (event: Event) => {
	let target = event.target as HTMLSelectElement;
	emit('update:modelValue', target.value);
}

</script>

<style lang="scss" scoped></style>