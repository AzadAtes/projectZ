<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});
</script>

<template>
	<li id="task" class="bg-neutral-dark-300">
		<p>{{ props.task.name }}</p>
	</li>
</template>

<style scoped></style>
