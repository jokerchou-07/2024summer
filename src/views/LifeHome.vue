<template>
  <div class="container">
    <div class="text-red-200"> tailwind testing</div>

    <div class='item' v-for="item in items" :key="item.label" @click="goDetail(item.url)">
      <div class="image-wrapper">
        <img :src="item.image" :alt="item.label">
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifeHome',
  data() {
    return {
      items: [
        { id: 1, label: '系所', image: '/logo.png', url: '/department' },
        { id: 2, label: '交通', image: '/logo.png', url: '/transport' },
        { id: 3, label: '社團', image: '/logo.png', url: '/club' },
        { id: 4, label: '宿舍', image: '/logo.png', url: '/dormitory' }
      ]
    }
  },
  methods: {
    goDetail(url) {
      this.$router.push(url);
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
  margin: auto;
}
.item {
  margin-top:12%;
  font-size: 25px; 
  display: flex;
  text-align: center;
}
.image-wrapper {
  position: relative;
  width: 170px; 
  height: 170px;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image-wrapper span {
  transform: translate(-50%, -50%);
  color: black; 
  font-weight: bold;
  padding: 5px;


}
</style>


