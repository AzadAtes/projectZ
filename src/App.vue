<script setup lang="ts"></script>

<template>
	<div
		id="header-wrapper"
		class="h-header bg-neutral-dark-200 fixed left-0 top-0 flex w-full justify-center"
	>
		<div id="header" class="flex flex-1 p-3"></div>
	</div>
	<div
		id="main-content-wrapper"
		class="mt-header flex h-full w-full justify-center"
	>
		<div
			id="main-content"
			class="min-w-main-content max-w-main-content flex-1 p-3"
		>
			<RouterView />
		</div>
	</div>
</template>

<style scoped></style>
