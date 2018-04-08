<template>
  <div class="trend">
    <div class="viewItem">
      <h5 class="viewItemTitle">
        传播时间趋势
      </h5>
      <div class="viewItemMain">
        <lineCharts :lineChartsParams="timeTrend"/>
      </div>
      <div class="arc-box">
        <img src="../../assets/svg/arc_left.svg" class="left-img"/>
        <div>综合数值最高峰: 2017年05月19日</div>
        <img src="../../assets/svg/arc_right.svg" class="right-img"/>
      </div>
      <div class="table-content">

        <tables :data="tableData"
                :columnData="columnData"
                :options="options"
                @refresh-data="refreshData"
        />
      </div>
    </div>
    <div class="viewItem">
      <h5 class="viewItemTitle">
        作品发布时间趋势
      </h5>
      <div class="time-lines">
        <div id="time-lines" style="height:450px"/>
      </div>
    </div>
  </div>
</template>

<script>
  import lineCharts from '@/components/common/lineCharts.vue'
  import Tables from '@/components/common/ZCTables'
  import echarts from 'echarts'

  export default {
    name: "trend-content",
    components: {
      'lineCharts': lineCharts,
      'tables': Tables
    },
    methods: {
      refreshData({selected, currentPage, pageSize, sortingIndex}) {
        console.log(`筛选项=${selected},当前页=${currentPage},每页数=${pageSize},排序项=${sortingIndex}`);
      },
      clickTablecell({rowIndex, columnIndex}) {
        console.log(`行号=${rowIndex},列号=${columnIndex}`);
      },
    },
    data() {
      return {
        timeTrend: {
          idName: 'TrendCharts'
        },
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
          id: 'trend_tables',
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
              {width: '150px', textAlign: 'center'},
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
        },
      }
    },
    mounted() {
      var timeLines = echarts.init(document.getElementById('time-lines'));
      timeLines.showLoading();
      var option = {
        grid: {
          left: 80,
          right: 80,
          top: 50,
          bottom: 50
        },
        xAxis: {
          show: false,
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        tooltip: {
          trigger: 'axis',
          // formatter: "{b} <br/>{a}: {c}",
          backgroundColor: 'rgba(255,255,255,0.5)',
          textStyle: {
            color: '#444'
          },
          extraCssText: 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);padding:10px'
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        series: [{
          data: [900, 850, 750, 850, 750, 650, 500],
          type: 'line',
          lineStyle: {
            color: '#4642ff'
          },
          itemStyle: {
            color: '#4642ff',
            border: 'solid'
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(70, 66, 255)'
              }, {
                offset: 1,
                color: 'rgb(00, 198, 255)'
              }])
            }
          },
          smooth: true
        }]
      };
      timeLines.hideLoading();
      timeLines.setOption(option);
    },
  }
</script>

<style lang="css">
  @import '../../assets/css/trend/trend.css';
  @import '../../assets/css/home/common.css';
</style>
