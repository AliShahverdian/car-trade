import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RadianaProducts from '../views/RadianaProducts.vue';
import ProductsDetails from '../views/ProductsDetails.vue';
const routes = [
	{
		path: '/',
		name: 'HomeView',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'AboutView',
		component: AboutView,
	},
	{
		path: '/products',
		name: 'RadianaProducts',
		component: RadianaProducts,
	},
	{
		path: '/products/:id',
		name: 'ProductsDetails',
		component: ProductsDetails,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
