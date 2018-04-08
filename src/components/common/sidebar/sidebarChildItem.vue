<template>
  <div class="sidebar-child-item">
    <div class="normal" >{{item}}</div>
  </div>
</template>

<script>
  export default {
    name: "sidebar-child-item",
    props: ['item'],

    data() {
      return {
        select: false
      }
    }
  }
</script>

<style lang="css">
  @import "../../../assets/css/common/slidebarChildItem.css";
</style>
