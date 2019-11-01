<template>
  <div>
    <h1>{{msg}}</h1>
    <keep-alive>
      <component :is="current" />
    </keep-alive>
    <button @click="current = 'UsageKaSubItem1'">UsageKaSubItem1</button>
    <button @click="current = 'UsageKaSubItem2'">UsageKaSubItem2</button>
  </div>
</template>
<script>
import UsageKaSubItem1 from './UsageKaSubItem1.vue'
import UsageKaSubItem2 from './UsageKaSubItem2.vue'

export default {
  components: {
    UsageKaSubItem1,
    UsageKaSubItem2
  },
  data() {
    return {
      msg: 'UsageKa.vue',
      current: 'UsageKaSubItem1'
    }
  }
}
</script>
<style scoped>
h1 {
  color: green;
}
</style>
