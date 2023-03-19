<template>
	<div>brandName</div>
	<select v-model="product.brand">
		<option disabled value="">select a brand</option>
		<option>toyota</option>
		<option>mercedes benz</option>
		<option>bmw</option>
		<option>auodi</option>
		<option>volexwagen</option>
		<option>ford</option>
		<option>crisler</option>
		<option>ferari</option>
		<option>aston martin</option>
		<option>mazda</option>
		<option>mitsubishi</option>
		<option>honda</option>
		<option>heyonda</option>
		<option>kia</option>
		<option>landrover</option>
		<option>volvo</option>
	</select>
	<div>model</div>
	<select v-model="product.model">
		<option disabled value="">select a model</option>
		<option>camry</option>
		<option>amg</option>
		<option>x3</option>
		<option>tt</option>
		<option>golf</option>
		<option>fiesta</option>
		<option>crisler</option>
		<option>la-ferari</option>
		<option>aston</option>
		<option>3</option>
		<option>lancer</option>
		<option>civic</option>
		<option>sonata</option>
		<option>picanto</option>
		<option>evoke</option>
		<option>v70</option>
	</select>
	<div>image</div>
	<input type="file" @change="addImage" />
	<div>price</div>
	<input placeholder="enter price" type="text" v-model="product.price" />
	<div>description</div>
	<input type="text" v-model="product.des" />
	<div><input type="submit" @click="submitProduct" /></div>
</template>
<script>
	export default {
		data() {
			return {
				product: {
					id: '',
					brand: '',
					model: '',
					price: '',
					img: '',
					des: '',
				},
			};
		},
		methods: {
			addImage(event) {
				this.product.img = event.target.files[0].name;
			},
			async submitProduct() {
				await fetch('http://localhost:3000/products', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
					},
					body: JSON.stringify(this.product),
				});
				(this.product.id = ''),
					(this.product.brand = ''),
					(this.product.model = ''),
					(this.product.price = ''),
					(this.product.img = ''),
					(this.product.des = '');
			},
		},
	};
</script>
