<template>
  <div class="mediamonitor" id="mediamonitor" v-title="'单个页面'">
    <el-container>
      <el-header height="auto">
        <tops/>
        <navitem ref="navItem" :isSingle="true" @search-title-change="searchTitleChange" @pick-time-change="pickTimeChange"></navitem>
      </el-header>
      <el-container>
        <el-main>
          <div class="content" style="left:0;top: 91px;bottom: 0;">
            <MediaMonitorSingleContent></MediaMonitorSingleContent>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import tops from '@/components/common/header.vue'
  import navItem from '@/components/common/navItem.vue'
  import MediaMonitorSingleContent from './MediaMonitorSingleContent';

  export default {
    name: "media-monitor-single",
    components: {
      'tops': tops,
      'navitem': navItem,
      MediaMonitorSingleContent,
    },
    methods:{
      searchTitleChange(searchTitle){
        console.log(searchTitle)
      },
      pickTimeChange(time){
        console.log(time)
      }
    }
  }
</script>

<style scoped>

  @import '../../assets/css/home/home.css';

</style>
