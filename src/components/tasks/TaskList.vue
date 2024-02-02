<script setup lang="ts">
import Task from "./Task.vue";
import { useTaskStore } from "../../stores/taskStore.ts";
const taskStore = useTaskStore();
</script>

<template>
	<ul
		id="task-list"
		class="bg-neutral-dark-200 flex list-none flex-col gap-3 p-3"
	>
		<Task v-for="task in taskStore.tasks" :task="task" :key="task.id" />
	</ul>
</template>

<style scoped></style>
