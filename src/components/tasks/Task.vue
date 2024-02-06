<script setup lang="ts">
import { PropType } from "vue";
import TaskList from "./TaskList.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
	isEvenIteration: Boolean, // used to control alternating effects like background-color.
});
</script>

<template>
	<li
		data-name="task-item"
		class="flex flex-1 flex-col rounded bg-neutral-dark-500 shadow"
		:class="isEvenIteration ? 'bg-neutral-dark-500' : 'bg-neutral-dark-600'"
	>
		<p data-name="task-name">{{ props.task.name }}</p>
		<TaskList :tasks="props.task.subTasks" :isEvenIteration="!props.isEvenIteration" />
	</li>
</template>

<style scoped></style>
