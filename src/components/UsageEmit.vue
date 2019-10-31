<template>
  <div>
    <h1>{{title}}</h1>
    <usage-emit-sub-item :subTitle="subTitle" @changeSubTile="changeSubTile" />
  </div>
</template>
<script>
import UsageEmitSubItem from "./UsageEmitSubItem.vue";

export default {
  components: {
    UsageEmitSubItem
  },
  data() {
    return {
      title: "UsageEmit.vue",
      subTitle: "UsageEmitSubItem.vue"
    };
  },
  methods: {
    changeSubTile: function(title) {
      this.subTitle = title;
    }
  }
};
</script>
<style scoped>
h1 {
  color: green;
}
</style>