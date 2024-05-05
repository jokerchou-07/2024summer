<template>
  <div class="signboard">
    <div class="vehicle-container">
      <div class="vehicle-group">
        <span class="vehicle-name-left" @click="goway(vehicles[1].url)">{{ vehicles[1].name }}</span>
      </div>
      <div class="vertical-line"></div>
      <div class="vehicle-group">
        <span class="vehicle-name-right" @click="goway(vehicles[0].url)">{{ vehicles[0].name }}</span>
        <span class="vehicle-name-right" @click="goway(vehicles[2].url)">{{ vehicles[2].name }}</span>
      </div>
    </div>
    <div class="bike-container">
      <div class="bike-group">
        <img src='/bike.jpg' alt="Bike" style="width: 450px;"  @click="goway(vehicles[3].url)">
        <span class="bike-name" @click="goway(vehicles[3].url)">{{ vehicles[3].name }}</span>
      </div>
    </div>
  </div>
</template>


<script>

// 請改成 composition api 的方式
export default {
  setup() {
     const vehicles = ([
      { id: 1, name: '汽車', url: '/car' },
      { id: 2, name: '機車', url: '/motorcycle' },
      { id: 3, name: '公車', url: '/bus' },
      { id: 4, name: '腳踏車', url: '/bike'}
    ])
    return {
      vehicles
    }
  },
  methods: {
    goway(url) {
      this.$router.push(url);
    },
  },
}
</script>

<style scoped>
.signboard {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 5%;
}

.vehicle-container {
  display: flex;
  align-items: center;
  margin-right: 10%;
}

.bike-container {
  display: flex;
  align-items: center;
  margin-top: 15%;
  margin-left: 5%;
}

.vehicle-group {
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  margin-bottom: 30%;
}

.vehicle-name-left {
  text-align: center;
  padding: 10px 100px;
  padding-right: 50px;
  font-size: 35px;
  margin: 50px 20px;
  margin-bottom:90px;
  background-color: rgb(211, 211, 211);
  clip-path: polygon(100% 0, 30% 0, 0% 50%, 0% 50%, 30% 100%, 30% 100%, 100% 100%);
  }

.vehicle-name-right {
  text-align: center;
  padding: 10px 100px;
  padding-left: 50px;
  font-size: 35px;
  margin: 50px 20px;
  margin-bottom:90px;
  background-color: rgb(211, 211, 211);
  clip-path: polygon(0% 0, 70% 0, 100% 50%, 100% 50%, 70% 100%, 70% 100%, 0% 100%);
}

.vertical-line {
  width: 15px;
  height: 550px;
  background-color: black;
}

.bike-group {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bike-group img {
  width: 450px; 
}

.bike-name {
  position: absolute;
  bottom:8px;
  text-align: center;
  padding: 8px 25px;
  font-size: 28px;
  color:black; 
  border-radius:10px;
}
</style>
