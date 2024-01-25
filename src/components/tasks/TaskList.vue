<script setup lang="ts">
import Task from "./Task.vue";
import { useTaskStore } from "../../stores/taskStore.ts";
const taskStore = useTaskStore();
</script>

<template>
	<ul id="task-list" class="flex2 list-none flex-col gap-1">
		<Task v-for="task in taskStore.tasks" :task="task" :key="task.id" />
	</ul>
</template>

<style scoped></style>
