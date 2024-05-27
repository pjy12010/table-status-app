<template>
  <div>
    <MainPageComponent />
  </div>
</template>

<script>
import MainPageComponent from '../components/MainPage.vue';
// import { useRouter } from 'vue-router';

// const router = useRouter();
// const goAboutPage = () => {
// 	router.push('/UserStatus');
// };

export default {
  name: 'HomeView',
  components: {
    MainPageComponent,
  },
};
</script>
