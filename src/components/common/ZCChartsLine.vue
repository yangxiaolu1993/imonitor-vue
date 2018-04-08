<template>

    <div id="lineChart" ref="lineChart"></div>

</template>

<script>
  import echarts from 'echarts'

    export default {
      name: "line-charts",
      props:{
        chartText:{type:String,default:'',require:false},
        seriesArr:{type:Array,default:[],require:true},
        chartXAxis:{type:Array,default:[],require:true},
        chartHeight:{type:String,default:'350',require:false},
      },
      data(){
        return{
          options:{},
          seriesItems:[],
          xAxis:[]
        }
      },
      methods:{
        //折线图x轴数据
        setupXAxis(){
          if (!this.chartXAxis.length){
            this.xAxis = ['2017/12/28','2017/12/29','2017/12/30','2017/12/31','2018/01/01','2018/01/02','2018/01/03']
          }
        },

        //折线图数据
        setupSeries(){
          for (var i=0;i<this.seriesArr.length;i++){
            var seriesItem = {
              name: this.seriesArr[i].name,
              type: 'line',
              symbolSize: 8,
              symbol: 'emptyCircle',
              animation:true,
              data: this.seriesArr[i].data,
              // areaStyle:{},
            }
            this.seriesItems.push(seriesItem)
          }
        },

        //折线图参数
        setupOptions(){
          this.options = {
            title:{
              show:this.chartText.length,
              text:this.chartText
            },
            legend: {
              icon:'circle',
              top: '10',
              right:'20',
              textStyle: {color: '#444'},
              tooltip:{show:false}
            },
            grid: {
              left: '3%',
              right: '3%',
              top: '50',
              bottom: '50',
            },
            xAxis: {
              axisLine : {
                lineStyle: {color: '#afafaf'}
              },
              axisTick: {
                show: false
              },
              boundaryGap: false,
              data: this.chartXAxis.length?this.chartXAxis:this.xAxis
            },
            yAxis: {
              axisLine: {
                show:false
              },
              splitLine: {
                show: true,
                lineStyle: {color: '#d3d3d3', type:'dashed'}
              },
              axisTick: {
                "show": false
              },
              axisLabel: {
                show:false
              },
              type: 'value'
            },
            color:['#4642ff','#00c6ff','#46dd31','#ffd541','#ff9241','#fb5959'],
            tooltip: {
              trigger: 'axis',
              confine:true,
              backgroundColor:'rgba(255,255,255,0.5)',
              textStyle:{color:'#444'},
              extraCssText: 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);padding:10px'
            },
            series: this.seriesItems,
          }
        },
      },
      mounted () {
        this.$refs.lineChart.style.height = this.chartHeight+'px';
        //初始化折线图x轴数据
        this.setupXAxis();
        //初始化折线图数据
        this.setupSeries();
        //初始化折线图参数
        this.setupOptions();
        //创建折线图控件
        var lineChart = echarts.init(document.getElementById('lineChart'));
        //折线图渲染
        lineChart.setOption(this.options);
      },
    }
</script>

