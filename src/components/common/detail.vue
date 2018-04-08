<template>
  <div class="hot">
    <el-row type="flex" justify="space-between">
      <el-col>
        <h4>{{hotWork}}</h4>
      </el-col>
      <el-col style="width:80px;padding:20px 0px;">
        <el-select v-model="currentType" placeholder="请选择活动分类">
          <el-option
            v-for="type in types"
            :value="type">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-table :data="filterTableData" @cell-click="handleDetail">
      <el-table-column type="index" :index="indexMethod" label=" "></el-table-column>
       <el-table-column v-for="item in theadList" :property="item.property" :label="item.label"></el-table-column>
     <!-- <el-table-column property="media" label="平台"></el-table-column>
      <el-table-column property="title" label="文章标题"></el-table-column>
      <el-table-column property="reprintNum" label="转载数"></el-table-column>
      <el-table-column property="judgeNum" label="评论数"></el-table-column>
      <el-table-column property="readNum" label="阅读数"></el-table-column>
      <el-table-column property="goodNum" label="点赞数"></el-table-column>
      <el-table-column property="time" label="发布时间"></el-table-column>
      <el-table-column property="writer" label="作者"></el-table-column>-->
      <el-table-column inline-template label="" align="center" property="id">
        <el-button type="text" size="mini" @click.native="">查看详情</el-button>
      </el-table-column>
    </el-table>

    <div class="footer">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10,30,40]"
        :page-size="10"
        layout="total,sizes"
        :total="30">
      </el-pagination>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10,30,40]"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="30">
      </el-pagination>
      <el-button size="small">确认</el-button>
    </div>
  </div>
</template>

<script>
  export default{
    name:'hotworkTable',
    data(){
      return{
        hotWork:'热门作品',
        title:'传播监测系统',
        currentType: '全部',
        types: ['全部','原创','非原创'],
        theadList:[
          {property:'media',label:'平台'},
          {property:'title',label:'文章标题'},
          {property:'reprintNum',label:'转载数'},
          {property:'judgeNum',label:'评论数'},
          {property:'readNum',label:'阅读数'},
          {property:'goodNum',label:'点赞数'},
          {property:'time',label:'发布时间'},
          {property:'writer',label:'作者'}
        ],
        tableList:[
          {
            id:'查看详情',
            media:'齐鲁网',
            title:'携手2018世界杯 蒙牛拥抱新时代',
            reprintNum:'54',
            judgeNum:'22',
            readNum:'66',
            goodNum:'55',
            time:'2017-3-1 15:35',
            writer:'佚名'
          },
          {
            id:'查看详情',
            media:'齐鲁网',
            title:'携手2018世界杯 蒙牛拥抱新时代',
            reprintNum:'54',
            judgeNum:'22',
            readNum:'66',
            goodNum:'55',
            time:'2017-3-1 15:35',
            writer:'佚名'
          },
          {
            id:'查看详情',
            media:'齐鲁网',
            title:'携手2018世界杯 蒙牛拥抱新时代',
            reprintNum:'54',
            judgeNum:'22',
            readNum:'66',
            goodNum:'55',
            time:'2017-3-1 15:35',
            writer:'佚名'
          },
          {
            id:'查看详情',
            media:'齐鲁网',
            title:'携手2018世界杯 蒙牛拥抱新时代',
            reprintNum:'54',
            judgeNum:'22',
            readNum:'66',
            goodNum:'55',
            time:'2017-3-1 15:35',
            writer:'佚名'
          },
          {
            id:'查看详情',
            media:'原创',
            title:'携手2018世界杯 蒙牛拥抱新时代',
            reprintNum:'54',
            judgeNum:'22',
            readNum:'66',
            goodNum:'55',
            time:'2017-3-1 15:35',
            writer:'佚名'
          },
          {
            id:'查看详情',
            media:'原创',
            title:'携手2018世界杯 蒙牛拥抱新时代',
            reprintNum:'54',
            judgeNum:'22',
            readNum:'66',
            goodNum:'55',
            time:'2017-3-1 15:35',
            writer:'佚名'
          },
          {
            id:'查看详情',
            media:'原创',
            title:'携手2018世界杯 蒙牛拥抱新时代',
            reprintNum:'54',
            judgeNum:'22',
            readNum:'66',
            goodNum:'55',
            time:'2017-3-1 15:35',
            writer:'佚名'
          }
        ]
      }
    },
    computed:{
      filterTableData:function () {
        var type=this.currentType;
        return this.tableList.filter(function(data){
          if(type=='全部'||type==''){
            return true;
          }else{
            return data.media==type;
          }
        })

      }
    },
    methods:{
      indexMethod(index) {  //自定义索引
        return index +1;
      },
      handleDetail:function(row,column,cell,event){
        if (column.label == '') {
          this.$router.push('/home/overviewEx');
        }
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      loadData:function(pno){
        var url="";
        this.$http.get(url).then(function(response){
          this.tableList=response.resultObj;
        });
      }
    },
    mounted(){
      this.loadData(1);
    }
  }
</script>

<style lang="">
  .el-button{
    margin-left:-540px;
  }
  .footer{
    display:flex;
    justify-content:space-between;
    padding:20px 0;
  }
  .confirm{
    float:right;
  }
  .hot {
    width:95%;
    margin:0 auto;
    padding: 1px 25px;
    background-color:#fff;
  }
  .selectAll{
    float:right;
  }
  .el-table th{
    background-color:#f4f4f4;
  }
  th .cell{
    color:#444;
  }
  .el-table_1_column_3,.el-table_1_column_4{
    color:#4642ff;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-table_1_column_3>.cell:hover{
    cursor: pointer;
    color: #409EFF;
    text-decoration:underline;
  }
  .el-table_1_column_4>.cell:hover{
    cursor: pointer;
    color: #409EFF;
    text-decoration:underline;
  }
  .el-table_1_column_5>.cell:hover{
    cursor: pointer;
    color: #409EFF;
    text-decoration:underline;
  }
  .el-table_1_column_6>.cell:hover{
    cursor: pointer;
    color: #409EFF;
    text-decoration:underline;
  }
  .el-table_1_column_7>.cell:hover{
    cursor: pointer;
    color: #409EFF;
    text-decoration:underline;
  }
</style>
