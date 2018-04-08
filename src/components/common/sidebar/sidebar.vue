<template>
  <div class="slide" id="sidebar">
    <div >
      <div v-for="sideList in sidebarList" :item="sideList"
           :key="sideList.id">
        <sidebarParentItem ref="siderMenuItem" :item="sideList"/>
      </div>
    </div>
    <div class="customization" @click="customizationListener()"><i class="fa fa-plus"/>&nbsp;&nbsp;定制监视项</div>
  </div>
</template>

<script>
  import SidebarParentItem from '@/components/common/sidebar/sidebarParentItem'
  import SidebarChildItem from '@/components/common/sidebar/sidebarChildItem'

  export default {
    data() {
      return {
        sidebarList: [
          {id: 1, name: '苏州广播电视台总台', show: true, canOpen: false, child: []},
          {id: 2, name: '名称苏州网', show: false, canOpen: false, child: []},
          {id: 3, name: '看苏州APP', show: false, canOpen: false, child: []},
          {id: 4, name: '无线苏州APP', show: false, canOpen: false, child: []},
          {
            id: 5, name: '微信', show: false, canOpen: true, child: ['微信01', '微信02', '微信03', '微信04', '微信05']
          },
          {id: 6, name: '微博', show: false, canOpen: true, child: ['微博01', '微博02', '微博03', '微博04', '微博05']}
        ],
        isActive: false,
      }
    },
    mounted: function () {
      var items = this.$refs.siderMenuItem;
      var thzz = this;
      if (items && items.length && items.length > 0) {
        for (var i = 0; i < items.length; i++) {
          var callback = function (item, childIndex) {
            if (item.canOpen && childIndex == -1) {
              return
            }
            for (var i = 0; i < thzz.sidebarList.length; i++) {
              thzz.sidebarList[i].show = false
            }
            item.show = !item.show
            var fun = thzz.propClickListener;
            if (fun == null) {
              fun = thzz.dataClickListener
            }
            if (childIndex != -1 && fun != null) {
              fun(item.child[childIndex])
            } else if (fun != null) {
              fun(item.name);
            }
          };
          items[i].chooseListener = callback;
        }
      }
    },
    props: {
      propClickListener: {type: Function, default: null}
    },
    components: {
      SidebarParentItem,
      SidebarChildItem
    },
    methods: {
      dataClickListener: () => {
      },
      customizationListener(){
        var fun = this.propClickListener;
        if (fun == null) {
          fun = this.dataClickListener
        }
        // fun('我要定制')
        this.$router.push({path:'/customization'})
      }
    }
  }
</script>
<style lang="css">
  @import '../../../assets/css/common/slide.css';
</style>
