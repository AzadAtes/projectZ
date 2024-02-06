<script setup lang="ts">
import Task from "./Task.vue";
import { PropType } from "vue";

const props = defineProps({
	tasks: {
		type: Object as PropType<Task[]>,
		required: false,
	},
	isEvenIteration: Boolean, // used to control alternating effects like background-color.
});
</script>

<template>
	<ul data-name="task-list" class="ml-6 flex flex-1 list-none flex-col gap-5">
		<Task
			v-for="task in props.tasks"
			:task="task"
			:isEvenIteration="props.isEvenIteration"
			:key="task.id"
		/>
	</ul>
</template>

<style scoped></style>
