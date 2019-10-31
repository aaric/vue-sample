<template>
  <div>
    <h1 @click="changeSubTile">{{subTitle}}</h1>
  </div>
</template>
<script>
export default {
  // props: ['subTitle'],
  props: {
    subTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changeSubTile: function() {
      this.$emit('changeSubTile', 'UsageEmitSubItem.vue Changed ' + Date.now())
    }
  }
}
</script>
<style scoped>
h1 {
  color: orange;
}
</style>
