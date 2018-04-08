<template>
  <div class="navItem" id="navItem">
    <div class="navItemReport">
      <el-button type="primary">生成报告</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        restaurants: [],
        type: 'week',
        state1: '',
        value3: '',
        pickerTime: '',
        pickerFocus: false,
        displayValue: 'displayValue'
      }
        ;
    },
    methods: {
      transmitEvent(a) {
        a.preventDefault();
      }
    },
    mounted() {
    }
  }
</script>
<style lang="css">
  @import '../../assets/css/example/navItem.css';
</style>
