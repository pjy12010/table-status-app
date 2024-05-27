import { createRouter, createWebHistory } from 'vue-router';
import Homeview from '../views/Home.vue';
import UserStatusView from '../views/UserStatus.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homeview
  },
  {
		path: '/userstatus',
		name: 'UserStatus',
		component: UserStatusView,
	},
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
