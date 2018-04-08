<template>
  <div class="region viewItem">
    <el-row>
      <el-col :span="14">
        <div class="map">
          <h5 class="viewItemTitle">
            传播地域分析
          </h5>
          <mapCharts style="margin-bottom: 50px"/>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="histogram-box">
          <div class="histogram-title">
            <div class="left">
              <div>覆盖地域数量</div>
              <span>10</span>
            </div>
            <div class="right">
              <div>江苏地区转载数量</div>
              <span>1000</span>
            </div>
          </div>
          <histogram class="histogram" idName="fgdy"/>
        </div>
      </el-col>
    </el-row>
    <h5 class="viewItemTitle">
      江苏地区转载数列表
    </h5>
    <div class="table-content">

      <tables :data="tableData"
              :columnData="columnData"
              :options="options"
              @refresh-data="refreshData"
      />
    </div>
  </div>
</template>
<script>
  import mapCharts from '@/components/common/mapCharts.vue'
  import histogram from '@/components/home/histogram.vue'
  import Tables from '@/components/common/ZCTables'

  export default {
    name: "region-content",
    components: {
      'mapCharts': mapCharts,
      'histogram': histogram,
      'tables': Tables
    },
    data() {
      return {

        //表格数据
        tableData: Array(8).fill({
          media: '看苏州App',
          title: '携手2018年世界杯 蒙牛拥抱新时代',
          platform: 'App',
          originalTitle: '蒙牛蒙牛',
          time: '2017-12-22 15:51',
        }),
        columnData: [
          {prop: 'media', label: '转载媒体'},
          {prop: 'title', label: '转载标题'},
          {prop: 'platform', label: '平台'},
          {prop: 'originalTitle', label: '原文标题'},
          {prop: 'time', label: '转载时间'},
        ],
        options: {
          id: 'region_tables',
          total: 1000,
          titleStyle: {
            fontSize: '20px',
            color: '#111111',
            paddingBottom: '0'
          },
          showBorder: false,
          //表格列样式
          columnStyle: {
            indexs: [0, 1, 2, 3, 4],
            styles: [
              {width: '150px', textAlign: 'left'},
              {textAlign: 'left', color: '#4642ff'},
              {width: '120px'},
              {width: '350px', textAlign: 'left', color: '#4642ff'},
              {width: '150px',textAlign: 'center'},
            ],
            commons: {textAlign: 'left', color: '#444'}
          },
          //表格表头样式
          headerStyle: {
            indexs: [0, 1],
            styles: [{textAlign: 'left'}, {textAlign: 'left'}],
            commons: {backgroundColor: '#f4f4f4', textAlign: 'left', padding: '5px 0'}
          },
          //设置表格类型
          tableType: {
            commons: 'index',
            position: 'leading'
          },
          //筛选项数据
          // selectData: [
          //   {value: '全部', label: '全部'},
          //   {value: '原创', label: '原创'},
          //   {value: '非原创', label: '非原创'},
          // ]
        },
      }
    },
    methods: {
      refreshData({selected, currentPage, pageSize, sortingIndex}) {
        console.log(`筛选项=${selected},当前页=${currentPage},每页数=${pageSize},排序项=${sortingIndex}`);
      },
      clickTablecell({rowIndex, columnIndex}) {
        console.log(`行号=${rowIndex},列号=${columnIndex}`);
      },

      window: onresize = function () {
        // return (() => {
        //
        // })
      }


    }
  }
</script>

<style lang="css">
  @import '../../assets/css/region/region.css';
  @import '../../assets/css/home/common.css';
</style>

