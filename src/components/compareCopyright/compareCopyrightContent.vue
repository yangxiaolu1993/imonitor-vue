<template>
  <div class="viewItem">
    <div class="compare-copyright">
      <div class="button-box">
        <div class="button-screen-shot">
          <i class="fa fa-picture-o"/>
          <span>截图对比</span>
        </div>
        <div class="button-text-compare">
          <i class="fa fa-file-text-o"/>
          <span>正文对比</span>
        </div>
        <span>相似度99%</span>
      </div>
      <el-row :gutter="60">
        <el-col :span="12">
          <copyRightTables/>
          <copyRightArticle style="margin-top: 30px"/>
        </el-col>
        <el-col :span="12">
          <copyRightTables/>
          <copyRightArticle style="margin-top: 30px"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import copyRightTables from '@/components/compareCopyright/copyRightTables.vue'
  import copyRightArticle from '@/components/compareCopyright/copyRightArticle.vue'

  export default {
    name: "compar-copyright-content",
    components: {
      'copyRightTables': copyRightTables,
      'copyRightArticle': copyRightArticle
    }
  }
</script>

<style scoped>
  @import '../../assets/css/home/common.css';
  @import '../../assets/css/compareCopyringht/compareCopyringhtContent.css';
</style>
