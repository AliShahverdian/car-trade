<template>
	<div class="contaner">
		<div v-for="product in products" :key="product.id" class="card">
			<div>{{ product.brand }}</div>
			<div>{{ product.model }}</div>
			<div>{{ product.des }}</div>
			<img :src="product.img" class="card-image" />
			<div>{{ product.price }}</div>
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
		border: solid 2px black;
		width: 200px;
		margin: 16px;
	}
	.contaner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 2px;
		justify-content: space-around;
	}
	.card-image {
		width: 100%;
		height: 100px;
	}
</style>
