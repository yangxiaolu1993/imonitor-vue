<template>

  <div class="zcchartsbar_content">
    <div :id="options.id" ref="chartsbar" style="background-color: #FFFFFF;width: 100%"></div>
    <div class="more" style="text-align: right">
      <el-button type="text" v-if="options.showMore">更多</el-button>
    </div>
  </div>

</template>

<script>
  import echarts from 'echarts'

  let emphasisColor = ['#4642ff', '#00c6ff', '#46dd31', '#ffd541', '#ff9241', '#fb5959']
  let nomalColor = ['#99acfd', '#7be0fd']


  export default {
    name: "zc-barcharts",
    props: {
      options: {
        type: Object,
        require: false,
        default() {
          return {
            // 柱状图方向:可选值 horizontal/vertical
            direction: {type: String, require: false, default: 'horizontal'},
            title: {type: String, require: false},
            showLegend: {type: Boolean, require: false, default: false},
            chartHeight: {type: String, require: true, default: '500'},
            // 柱状图名字
            id: {type: String, require: true},
            // 柱状图类目
            categoryArr: {type: Array, require: true},
            // 柱状图数据
            valueArr: {type: Array, require: true},
            //显示更多按钮
            showMore: {type: Boolean, require: false},
            //颜色组
            colorArr: {type: Array, require: false}
          }
        }
      }
    },
    methods: {

      // 设置柱状图参数
      setupOptions() {
        return {
          // color: nomalColor,
          title: {show: this.options.title.length, text: this.options.title},
          legend: {
            type: 'plain',
            show: this.options.showLegend,
            right: 0,
            top: 20,
            icon: 'circle',
            selectedMode: false
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
              type: 'line',
              label: {show: false},
              lineStyle: {width: 0},
            },
            backgroundColor: 'rgba(255,255,255,1)',
            textStyle: {color: '#444'},
            position: function (point) {
              return [point[0] + 20, point[1] - 20]
            },
            confine: true,
            extraCssText: 'box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);',
            formatter(params) {
              if (params[0].componentType == "series") {
                var format = '';
                params.forEach(function (value, index) {
                  //拼接字符串
                  format += (value.marker + value.seriesName + ' : ' + value.data)
                  //加换行符
                  if (value.seriesIndex != params.length - 1) {
                    format += '<br>'
                  }
                })
                return format;
              }
            }
          },
          grid: {
            top: 50,
            right: 30,
            bottom: 30,
            left: this.options.direction == 'horizontal' ? 30 : 60
          },
          xAxis: this.options.direction == 'horizontal' ? {
            type: 'category',
            axisLine: {lineStyle: {color: '#aaa'}, show: true},
            axisTick: {show: false},
            axisLabel: {color: '#444', show: true},
            data: this.options.categoryArr
          } : {
            type: 'value',
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            splitLine: {lineStyle: {type: 'dashed', color: ['#eee']}}
          },
          yAxis: this.options.direction == 'horizontal' ? {
            type: 'value',
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            splitLine: {lineStyle: {type: 'dashed', color: ['#eee']}}
          } : {
            type: 'category',
            axisLine: {lineStyle: {color: '#aaa'}},
            axisTick: {show: false},
            axisLabel: {color: '#444'},
            data: this.options.categoryArr
          },
          itemStyle: this.options.direction == 'horizontal' ? {barBorderRadius: [10, 10, 0, 0]} : {barBorderRadius: [0, 10, 10, 0]},
          barWidth: 20,
          series: this.setupSeries(),
        }
      },

      setupSeries() {
        var series = [];
        // var emphasisColor = ['#4642ff','#00c6ff','#46dd31','#ffd541','#ff9241','#fb5959']
        this.options.valueArr.forEach(function (value, index) {
          series.push({
            type: 'bar',
            name: value.name,
            data: value.data,
            // legendHoverLink:false,
            itemStyle: {color: nomalColor[index]},
            emphasis: {
              itemStyle: {
                color: emphasisColor[index]
              },
            },
          })
        })
        return series;
      }

    },
    mounted() {
      this.$refs.chartsbar.style.height = this.options.chartHeight + 'px';
      //创建折线图控件
      var barChart = echarts.init(document.getElementById(this.options.id));
      //折线图渲染
      barChart.setOption(this.setupOptions());

      setTimeout(function () {
        window.onresize = function () {

          barChart.resize();
          console.log('哈哈哈哈哈哈')
        }
      }, 200)
    }
  }
</script>

<style scoped>

</style>
