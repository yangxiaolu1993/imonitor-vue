<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1" @click="linkTo('/')">
      <div>传播情况总览</div>
    </el-menu-item>
    <el-menu-item index="2" @click="linkTo('/hotwork')">
      <div>热门作品</div>
    </el-menu-item>
    <el-menu-item index="3" @click="linkTo('/trend')">
      <div>传播趋势分析</div>
    </el-menu-item>
    <el-menu-item index="4" @click="linkTo('/region')">
      <div>传播地域分析</div>
    </el-menu-item>
    <el-menu-item index="5" @click="linkTo('/reprint')">
      <div>媒体转载分析</div>
    </el-menu-item>
    <el-menu-item index="6" @click="linkTo('/mediamonitor')">
      <div>重点媒体监测</div>
    </el-menu-item>
    <el-menu-item index="7" @click="linkTo('/platform')">
      <div>平台对比分析</div>
    </el-menu-item>
    <el-menu-item index="8" @click="linkTo('/works')">
      <div>作品对比分析</div>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "menuEl",
    props: ['activeIndex'],
    methods: {
      linkTo: () => {
      },
      getLinkTo: (thiz) => {
        return (path) => {
          thiz.$router.push(path)
        }
      }
    },
    mounted() {
      this.linkTo = this.getLinkTo(this)
    }
  }
</script>

<style scoped>

  .el-menu {
    position: fixed;
    left: 174px;
    right: 0px;
    top: 98px;
  }

  .el-menu--horizontal > .el-menu-item {
    width: 12.5%;
    padding: 0 50px;
  }

  .el-menu--horizontal > .el-menu-item div {
    display: inline-block;
    height: 60px;
    color: #444
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 0px;
  }

  .el-menu--horizontal > .el-menu-item.is-active div {
    height: 55px;
    border-bottom: 5px solid #4642ff;
  }

  .el-menu {
    border-top: 1px solid #e2e3e4;
    border-bottom: 1px solid #e2e3e4;
  }
</style>
