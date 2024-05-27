<template>
	<main>
		<div class="container py-4">
			<RouterView></RouterView>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<!-- / 루트로 들어왔을 땐 HomeView.vue를 요청
	/about 로 들어왔을 땐 AboutView.vue를 요청해야 함 -->
