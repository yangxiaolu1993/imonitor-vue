<template>
  <div class="home" id="home">
    <el-container>
      <el-header height="auto">
        <tops></tops>
        <navitem></navitem>
      </el-header>
      <el-container>
        <el-aside width="174px">
          <side></side>
        </el-aside>
        <el-main>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
              <router-link to="/example/overviewEx">传播情况总览</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/example/hotworksEx">热门作品</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/example/trendEx">传播趋势分析</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/example/regionEx">传播地域分析</router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link to="/example/monitorEx">重点媒体监测</router-link>
            </el-menu-item>
            <el-menu-item index="6">
              <router-link to="/example/mlatcontrastEx">平台对比分析</router-link>
            </el-menu-item>
            <el-menu-item index="7">
              <router-link to="/example/workcontrastEx">作品对比分析</router-link>
            </el-menu-item>
          </el-menu>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import tops from '@/components/example/header.vue'
  import navItem from '@/components/example/navItem.vue'
  import side from '@/components/example/side.vue'

  export default {
    name: 'home',

    components: {
      'tops': tops,
      'navitem': navItem,
      'side': side
    },
    data() {
      return {
        activeIndex: '4',
      }
    }
  }
</script>

<style>
  .el-header {
    padding: 0px;
  }

  .el-aside {
    background: #fafafb;
    border-top: 1px solid #e2e3e4;
    border-right: 1px solid #e2e3e4;
  }

  .el-main {
    border-top: 1px solid #e2e3e4;
    padding: 10px 0;
  }

  .el-menu--horizontal > .el-menu-item {
    width: 14.28%;
    padding: 0 50px;
  }

  .el-menu--horizontal > .el-menu-item a {
    display: inline-block;
    height: 60px;
    color: #444
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 0px;
  }

  .el-menu--horizontal > .el-menu-item.is-active a {
    height: 55px;
    border-bottom: 5px solid #4642ff;
  }

  .el-menu {
    border-top: 1px solid #e2e3e4;
    border-bottom: 1px solid #e2e3e4;
  }
</style>
