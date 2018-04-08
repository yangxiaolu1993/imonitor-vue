<template>
  <div class="optionList">
    <div class="itemLine" :style="{display:listItem.name=='网站'||listItem.name=='App'?'inline':'block'}"
         v-for="listItem in listData">
      <div class="itemBox" v-for="(item,index) in listItem.items">
        <span class="name" v-if="index == 0">{{listItem.name}}:</span>
        <el-checkbox class="item" v-model="item.choose" v-show="item.name&&item.name!=''">{{item.name}}</el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "choose-option-list",
    props: ['listData'],
    data() {
      return {
        radio: false,
        radio1: true
      }
    },
  }
</script>

<style scoped>
  @import '../../assets/css/monitorCustomization/chooseOptionList.css';
</style>
