<template>
  <div>
    <h1>{{msg}}</h1>
    <usage-slot-sub-item>
      <h2 slot="title">Title</h2>
      <p slot="content">Content</p>
    </usage-slot-sub-item>
  </div>
</template>
<script>
import UsageSlotSubItem from './UsageSlotSubItem.vue'

export default {
  components: {
    UsageSlotSubItem
  },
  data() {
    return {
      msg: 'UsageSlot.vue'
    }
  }
}
</script>
<style scoped>
h1 {
  color: green;
}
</style>
