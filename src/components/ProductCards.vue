<template>
	<div>
		<div v-for="product in products" :key="product.id" class="card">
			<div>{{ product.model }}</div>
			<div>{{ product.brand }}</div>
			<div>{{ product.des }}</div>
			<div>{{ product.img }}</div>
			<img :src="product.img" />
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			products: {
				type: Array,
				default: () => [],
			},
		},
	};
</script>
<style>
	.card {
		border: solid 1px black;
	}
</style>
