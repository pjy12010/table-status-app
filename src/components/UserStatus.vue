<template>
  <main>
    <div class="content">
      <img src="@/assets/egglogo.png" alt="Menu" class="egglogo-image" />
      <div class="time">기준 시간&emsp;&emsp;<span class = "coco">{{ currentTime }}</span></div>
      <div class = "info">사용 가능 테이블 수 :&ensp;<span class="coco">{{ availableTables }}</span>&ensp;개</div>
      <div class = "button">2인 :&ensp;<span class="coco">{{ twoPersonTables }}</span>&ensp;개</div>
      <div class = "button">4인 :&ensp;<span class="coco">{{ fourPersonTables }}</span>&ensp;개</div>
      <div class = "button">6인 :&ensp;<span class="coco">{{ sixPersonTables }}</span>&ensp;개</div>
      <div class = "info">사용 가능 좌석 수 :&ensp;<span class = "coco">{{ availableSeats }}</span>&ensp;개</div>
      <div class = "table">
      최장 체류 테이블 :&ensp;<span class = "coco">{{ tableNumber }}</span>&ensp;개
      <span class="spacer"></span>
      평균 체류 시간 :&ensp;<span class = "coco">{{ tableTime }}</span>&ensp;분
      </div>
    </div>
    <img src="@/assets/menu.png" alt="Menu" class="menu-image" />
  </main>
</template>

<script>
export default {
  name: 'MainComponent',
  data() {
    return {
      currentTime: '',
      availableTables: 5,
      twoPersonTables: 2,
      fourPersonTables: 3,
      sixPersonTables: 0,
      availableSeats: 16,
      tableNumber: 2,
      tableTime: 20,
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toTimeString().slice(0, 8);
    },
  },
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
@font-face {
  font-family: 'Midium';
  src: url("C:\Users\Boss\workspace\table-status-app\public\fonts\GmarketSansTTFMedium.ttf");
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f9f9f9;
}
.coco {
  color: #ff814b;
}
.content {
  text-align: center;
  margin-bottom: 4pc;
}
.spacer {
  display: inline-block;
  width: 30px;
}
.time, .info {
  margin-top: 30px;
  padding: 12px;
  font-family: 'Bold';
  background-color: white;
  border-radius: 10px;
  font-size: 17px;
  box-shadow: 5px 5px 5px #cacaca;
}

.button {
  display: inline-flex;
  margin: 10px;
  padding: 15px;
  margin-top: 30px;
  font-size: 17px;
  background-color: white;
  box-shadow: 5px 5px 5px #cacaca;
  border-radius: 10px;
  font-family: 'Bold';
}
.table{
  margin-top: 30px;
  padding: 12px;
  font-family: 'Bold';
  background-color: white;
  border-radius: 10px;
  font-size: 17px;
  box-shadow: 5px 5px 5px #cacaca;
}
.menu-image {
  width: 300px;
  height: auto;
  margin-left: 180px;
  margin-top: 100px;
}
.egglogo-image {
  width: 200px;
  height: auto;
  margin-bottom: 10px;
}
</style>
