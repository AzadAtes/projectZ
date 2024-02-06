<script setup lang="ts">
import TaskList from "../components/tasks/TaskList.vue";
import { useTaskStore } from "../stores/taskStore.ts";
const taskStore = useTaskStore();
</script>

<template>
	<TaskList :tasks="taskStore.tasks" :isEvenIteration="false" />
</template>

<style scoped></style>
