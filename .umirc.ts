import { defineConfig } from 'umi';

export default defineConfig({
	routes: [
		{ path: '/', component: '@/pages/index' },
		{ path: '/001', component: '@/pages/001' },
	],
	npmClient: 'npm',
	styles: [`body {margin: 0; overflow: hidden;}`],

});
