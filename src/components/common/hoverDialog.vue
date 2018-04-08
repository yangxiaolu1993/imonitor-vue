<template>
  <div class="hoverDialog-box" v-if="mouseOnDom" :style="{top:dialogTop,left:dialogLeft}">
    <div class="hoverDialog">
      <div v-for="(item, index1) in newData">
        <span v-for="(childItem, index2) in item" @click="clickDiv(index1*item.length+index2)">{{childItem}}</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "hover-dialog",
    props: ['testData'],
    data() {
      return {
        mouseOnDom: false,
        mouseOnDialog: false,
        clientHeight: 0,
        newData: {},
        setTimeOutCode: 0,
        dialogTop: '',
        dialogLeft: '',
        inCode: 0,
      }
    },
    mounted: function () {
      var length = this.testData.length;
      var lengthSqrt = Math.sqrt(length);
      lengthSqrt = Math.ceil(lengthSqrt);
      var newArrayLength = lengthSqrt;
      var newArrayItemLength = lengthSqrt;
      while (newArrayLength * newArrayItemLength > length) {
        newArrayLength--;
      }
      newArrayLength++;
      var newArray = new Array();
      for (var i = 0; i < newArrayLength; i++) {
        var newItemArray = new Array();
        for (var j = 0; j < newArrayItemLength; j++) {
          newItemArray[j] = this.testData[i * newArrayItemLength + j]
        }
        newArray[i] = newItemArray;
      }
      this.newData = newArray;
      this.clientHeight = document.documentElement.clientHeight;
      var parent = this.$parent.$el
      var thiz = this;
      parent.onmouseover = function () {
        if (!thiz.mouseOnDom) {
          thiz.inCode = setTimeout(function () {
            var rect = parent.getBoundingClientRect();
            var right = rect.right > 10 ? rect.right : 10;
            var top = rect.top > 10 ? rect.top : 10;
            top = top + newArrayLength * 23 + 10 > thiz.clientHeight ? thiz.clientHeight - (newArrayLength * 23 + 10) : top
            thiz.dialogTop = top + "px";
            thiz.dialogLeft = (right - 10) + "px";
            var obj = document.getElementById("sidebar");
            console.log(obj);
            if (obj.scrollHeight > obj.clientHeight) {
              thiz.dialogLeft = (right + 7) + "px"
            }
            thiz.mouseOnDom = true;
          }, 500)
        }
        clearTimeout(thiz.setTimeOutCode);
      };
      parent.onmouseout = function () {
        clearTimeout(thiz.inCode);
        thiz.setTimeOutCode = setTimeout(function () {
          thiz.mouseOnDom = false;
        }, 250)
      };
    },
    methods: {
      clickDiv: function (index) {
        this.$parent.clickChild(index);
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common/hoverDialog.css';
</style>
