<template>
  <div class="sidebar-parent-item">
    <div :class="{select:item.show}" style="position: relative" @click="clickParent()">
      <div class="normal">{{item.name}}
      </div>
      <i v-if="item.canOpen" ref="arrow" class="fa fa-chevron-down"
         style="position: absolute;top: 0px;right: 5px">
      </i>
    </div>
    <sidebarChildItem v-if="show" class="child" v-for="(itemChild,index) in item.child" :item="itemChild"
                      :key="itemChild.id" @click.native="clickChild(index)"/>
    <hover-dialog v-if="item.canOpen" :testData="item.child"/>
  </div>
</template>

<script>
  import SidebarChildItem from '@/components/common/sidebar/sidebarChildItem'
  import hoverDialog from '@/components/common/hoverDialog'

  export default {
    name: "sidebar-parent-item",
    components: {SidebarChildItem, hoverDialog},
    props: ['item'],
    created: function () {
      if (this.item.canOpen) {
        this.show = false;
      }
    },
    data() {
      return {
        show: true,
        select: false,
        chooseListener: () => {
        }
      }
    },
    methods: {
      clickChild(index) {
        this.chooseListener(this.item, index);
      },
      clickParent() {
        //可展开关闭的并且存在子条目的点击父条目只执行展开关闭
        if (this.item.canOpen && this.chooseListener) {
          var arrow = this.$refs.arrow;
          this.show = !this.show;
          if (this.show) {
            arrow.className = "fa fa-chevron-up"
          } else {
            arrow.className = "fa fa-chevron-down"
          }
          return
        }
        //存在子条目的点击父条目
        this.chooseListener(this.item, -1);
        return
      }
    }
  }
</script>

<style lang="css">
  @import "../../../assets/css/common/slidebarParentItem.css";
  @import "../../../assets/css/font-awesome.min.css";
</style>
