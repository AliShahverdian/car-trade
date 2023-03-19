<template>
	<div>
		<ProductCards :products="products" />
	</div>
</template>
<script>
	import ProductCards from '@/components/ProductCards.vue';
	export default {
		components: {
			ProductCards,
		},
		data() {
			return {
				products: [],
			};
		},
		async created() {
			await fetch('http://localhost:3000/products')
				.then((e) => e.json())
				.then((result) => (this.products = result));
		},
	};
</script>
