<template>

  <div class="hotwork_content">

    <tables :data="tableData"
            :columnData="columnData"
            :options="options"
            @refresh-data="refreshData"
            @click-tablecell="clickTablecell">
    </tables>

  </div>

</template>

<script>
  import Tables from '@/components/common/ZCTables'

  export default {
    name: "hot-work-content",
    components: {Tables},
    data() {
      return {

        //表格数据
        tableData: Array(8).fill({
          platform: '看苏州App',
          title: '携手2018年世界杯 蒙牛拥抱新时代111',
          reprints: '97',
          comments: '97',
          readings: '103',
          praise: '97',
          time: '2017-12-22 15:51',
          author: 'GG'
        }),
        columnData: [
          {prop: 'platform', label: '平台'},
          {prop: 'title', label: '文章标题'},
          {prop: 'reprints', label: '转载数'},
          {prop: 'comments', label: '评论数'},
          {prop: 'readings', label: '阅读数'},
          {prop: 'praise', label: '点赞数'},
          {prop: 'time', label: '发布时间'},
          {prop: 'author', label: '发布者'},
        ],
        options: {
          id: 'hotwork_content',
          total: 1000,
          title: '热门作品',
          titleStyle: {
            fontSize: '20px',
            color: '#111111',
            paddingBottom: '0'
          },
          showBorder: false,
          //表格列样式
          columnStyle: {
            indexs: [0, 1, 2, 3, 4, 5, 6, 7],
            styles: [
              {width: '100px', textAlign: 'left'},
              {textAlign: 'left', color: '#4642ff'},
              {width: '100px'},
              {width: '100px'},
              {width: '100px'},
              {width: '100px'},
              {width: '150px'},
              {width: '100px'},
            ],
            commons: {textAlign: 'center', color: '#444'}
          },
          //表格表头样式
          headerStyle: {
            indexs: [0, 1],
            styles: [{textAlign: 'left'}, {textAlign: 'left'}],
            commons: {backgroundColor: '#f4f4f4', textAlign: 'center', padding: '5px 0'}
          },
          //设置表格类型
          tableType: {
            commons: 'index',
            position: 'leading'
          },
          //筛选项数据
          selectData: [
            {value: '全部', label: '全部'},
            {value: '原创', label: '原创'},
            {value: '非原创', label: '非原创'},
          ]
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
        console.log('hahahaahah')
      }


    }
  }
</script>

<style>
  .hotwork_content{
    background-color: #fff;
    margin-top: 10px;
    padding: 20px;
  }
</style>
