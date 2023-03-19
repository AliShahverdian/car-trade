<template>
	<div class="home">this is home page</div>
	<ProductForm />
</template>

<script>
	import ProductForm from '@/components/ProductForm.vue';
	export default {
		name: 'HomeView',
		components: {
			ProductForm,
		},
	};
</script>
