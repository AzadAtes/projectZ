<script setup lang="ts">
import { PropType, ref } from "vue";
import TaskList from "./TaskList.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
	isEvenIteration: Boolean, // used to control alternating effects like background-color.
});
console.log(props.task.subTasks);

const showDetails = ref(false);
</script>

<template>
	<li
		data-name="task-item"
		class="mb-4 ml-12 mr-4 flex flex-1 flex-col rounded-xl bg-neutral-dark-500 shadow"
		:class="isEvenIteration ? 'bg-neutral-dark-600' : 'bg-neutral-dark-500'"
	>
		<p
			data-name="task-name"
			class="rounded-xl bg-neutral-dark-400 p-4"
			@click="showDetails = !showDetails"
			:class="props.task.subTasks == null || !showDetails ? 'mb-0' : 'mb-4 rounded-b-none'"
		>
			{{ props.task.name }}
		</p>
		<TaskList
			v-if="props.task.subTasks !== undefined && showDetails"
			:tasks="props.task.subTasks"
			:isEvenIteration="!props.isEvenIteration"
		/>
	</li>
</template>

<style scoped></style>
