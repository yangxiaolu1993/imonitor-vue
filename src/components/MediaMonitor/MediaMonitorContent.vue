<template>

  <div class="mediamonitor_content clearfix">

    <div class="mediamonitor_tables">
      <tables :data="tableData"
              :columnData="columnData"
              :options="tableOptions"
              @zctable-update="zctableUpdate"
              @click-tablecell="tablecellClick">
      </tables>
    </div>

    <div class="mediamonitor_three">

      <div class="left">

        <ChartsBar :options="chartsOptions[0]"></ChartsBar>
      </div>

      <div class="right">
        <ChartsBar :options="chartsOptions[1]"></ChartsBar>

      </div>
    </div>
  </div>


</template>

<script>
  import Tables from '@/components/common/ZCTables'
  import ChartsBar from '@/components/common/ZCChartsBar'

  export default {
    name: "media-monitor-content",
    components: {Tables, ChartsBar},
    data() {
      const item_table =
        {
          platform: '看苏州App',
          title_original: '携手2018年世界杯 蒙牛拥抱新时代',
          reprint: '新浪',
          title_reprint: '携手2018年世界杯 蒙牛拥抱新时代',
          time: '2017-12-22 15:51',
          author: '非首页',
          duration: '3小时',
        };
      return {
        //表格数据
        tableData: Array(10).fill(item_table),
        //表格表头数据
        columnData: [
          {prop: 'platform', label: '平台'},
          {prop: 'title_original', label: '原文标题'},
          {prop: 'reprint', label: '转载媒体'},
          {prop: 'title_reprint', label: '转载标题'},
          {prop: 'time', label: '转载时间'},
          {prop: 'author', label: '当前刊登状态'},
          {prop: 'duration', label: '首页刊登时长'},
        ],
        //表格参数列表
        tableOptions: {
          id:'mediamonitor_content',
          title: '重点监测媒体转载列表',
          total:500,
          titleStyle: {fontSize: '20px', color: '#111111'},
          showBorder: true,
          //表格列样式
          columnStyle: {
            indexs: [0, 1, 2, 3, 4, 5, 6],
            styles: [
              {width: '100px', textAlign: 'left'},
              {textAlign: 'left', color: '#4642ff',cursor:'pointer'},
              {width: '100px'},
              {textAlign: 'left', color: '#4642ff',cursor:'pointer'},
              {width: '150px'},
              {width: '120px'},
              {width: '120px'},
            ],
            commons: {textAlign: 'center'}
          },
          //表格行样式
          rowStyle: {
            indexs: [],
            styles: [],
            commons: {}
          },
          //表格表头样式
          headerStyle: {
            indexs: [0, 1, 3],
            styles: [{textAlign: 'left'}, {textAlign: 'left'}, {textAlign: 'left'}],
            commons: {backgroundColor: '#f4f4f4', textAlign: 'center', padding: '5px 0'}
          },
        },

        //图表参数列表
        chartsOptions: [
          {
            direction: 'vertical',//可选
            title:'哈哈哈1',
            chartHeight: 500,
            id: 'left',
            categoryArr: ['网易1', '凤凰网1', '腾讯网1', '搜狐1', '人民网1'],
            valueArr: [
              {name: '首页', data: [1, 3, 9, 7, 5]},
              {name: '非首页', data: [2, 4, 6, 8, 10]},
            ],
            showLegend:true,
            showMore:true,
          },
          {
            direction: 'vertical',
            title:'哈哈哈2',
            chartHeight: 500,
            id: 'right',
            categoryArr: ['网易2', '凤凰网2', '腾讯网2', '搜狐2', '人民网2'],
            valueArr: [
              {name: '首页', data: [1, 3, 5, 7, 9]},
              {name: '非首页', data: [2, 4, 6, 8, 10]},
            ],
            showLegend:true,
            showMore:true,
          },
        ]
      }
    },
    methods: {
      zctableUpdate({selected, pageNum, counts}) {
        // alert('筛选项='+selected+','+'当前页='+pageNum+','+'每页数='+counts);
        console.log('筛选项=' + selected + ',' + '当前页=' + pageNum + ',' + '每页数=' + counts);
      },

      tablecellClick({rowIndex,columnIndex}){
        console.log('行=' + rowIndex + ',' + '列=' + columnIndex);
        this.$router.push({path:'/single/mediamonitor'});
      },
    },
    mounted(){
      window:onresize=function () {
      }
    }
  }
</script>

<style>

  .mediamonitor_content{
    background-color: #fff;
    margin-top: 10px;
    padding: 20px;
  }

  .mediamonitor_tables{
    padding: 0;
    margin: 0;
  }
  .mediamonitor_three .left {
    width: 45%;
    float: left;
  }

  .mediamonitor_three .right {
    width: 45%;
    float: right;
  }
</style>
