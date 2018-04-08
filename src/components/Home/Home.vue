<template>
  <div class="home" id="home" v-title="'传播情况总览'">
    <el-container>
      <el-header height="auto">
        <tops/>
        <navitem ref="navItem"/>
      </el-header>
      <el-container>
        <el-aside width="174px">
          <sidebar class="side" :propClickListener="getSidebarListener()"/>
        </el-aside>
        <el-main>
          <menuEl :activeIndex="activeIndex"></menuEl>
          <div class="content">
            <homeContent></homeContent>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import tops from '@/components/common/header.vue'
  import navItem from '@/components/common/navItem.vue'
  import menuEl from '@/components/common/menuEl.vue'
  import sidebar from '@/components/common/sidebar/sidebar.vue'
  import homeContent from '@/components/Home/HomeContent.vue'

  export default {
    name: 'home',
    mounted: function () {
      this.$refs.navItem.$on("searchTitleChange", searchTitle => console.log(searchTitle));
      this.$refs.navItem.$on("pickTimeChange", time => console.log(time));
    },
    created: function () {
      var path = this.$route.path;
      if (path == '/') {
        this.activeIndex = '1'
      } else if (path == '/hotwork') {
        this.activeIndex = '2'
      } else if (path == '/trend') {
        this.activeIndex = '3'
      } else if (path == '/region') {
        this.activeIndex = '4'
      } else if (path == '/reprint') {
        this.activeIndex = '5'
      } else if (path == '/platform') {
        this.activeIndex = '6'
      }else if (path == '/mediamonitor') {
        this.activeIndex = '7'
      } else if (path == '/works') {
        this.activeIndex = '8'
      }
    },
    components: {
      'tops': tops,
      'navitem': navItem,
      'sidebar': sidebar,
      'menuEl': menuEl,
      'homeContent': homeContent,
    },
    methods: {
      getSidebarListener: function () {
        var thiz = this;
        return (text) => {
          if (text == '我要定制') {
            thiz.$router.push("/monitorCustomization")
          }
        }
      },
    },
    data() {
      return {
        activeIndex: '1',
        searchTitle: '',
      }
    }
  }
</script>

<style>
  @import '../../assets/css/home/home.css';
</style>
