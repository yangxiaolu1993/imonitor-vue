<template>
  <div class="home" id="home" v-title="'定制监测项'">
    <el-container>
      <el-header height="auto">
        <tops/>
        <customizationNavItem ref="navItem"/>
      </el-header>
      <el-container>
        <el-main>
          <div class="content-no-side-no-menu">
            <CustomizationContent/>
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
  import CustomizationNavItem from '@/components/Customization/CustomizationNavItem.vue'
  import CustomizationContent from '@/components/Customization/CustomizationContent.vue'

  export default {
    name: 'Customization',
    mounted: function () {
      // this.$refs.navItem.$on("searchTitleChange", searchTitle => console.log(searchTitle));
      // this.$refs.navItem.$on("pickTimeChange", time => console.log(time));
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
      } else if (path == '/mediamonitor') {
        this.activeIndex = '6'
      } else if (path == '/platform') {
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
      'CustomizationNavItem': CustomizationNavItem,
      'CustomizationContent': CustomizationContent
    },
    methods: {},
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
