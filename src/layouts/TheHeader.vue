<template>
  <header>
    <router-link to="/">
      <img src="@/assets/sinabro.png" alt="Menu" class="logo-image" />
    </router-link>
    <nav>
      <!-- <a href="#">좌석현황</a> -->
      <router-link to="/UserStatus">좌석현황</router-link>
      <a href="#">좌석안내시스템</a>
    </nav>
    <button class="login-btn">로그아웃</button>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
@font-face {
  font-family: 'Bold';
  src :url("C:\Users\Boss\workspace\table-status-app\public\fonts\GmarketSansTTFBold.ttf") ;
}
@font-face {
  font-family: 'Light';
  src: url("C:\Users\Boss\workspace\table-status-app\public\fonts\GmarketSansTTFLight.ttf");
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
nav a {
  margin: 0 100px;
  text-decoration: none;
  color: #000;
  font-family: 'Bold';
}
.login-btn {
  padding: 5px 10px;
  background-color: #eeeeee;
  border: none;
  cursor: pointer;
  font-family: 'Light';
  margin-left: 70px;
}
.logo-image {
  margin: 0 100px;
  width:150px;
  height: auto;
}
</style>