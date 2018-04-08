<template>
  <div :id="idName" style="height: 600px;width: 400px;background: #fff"></div>
</template>

<script>
  export default {
    name: "histogram",
    props: ['idName'],
    methods: {
      initHistogram() {
        let echarts = require('echarts/lib/echarts')
        var myChart = echarts.init(document.getElementById(this.idName));
        var index = 0;
        myChart.setOption({
          tooltip: {},
          grid: {
            left: 70,
            top: 20
          },
          radius: '100%',
          yAxis: {
            data: ['北京', '广东', '上海', '河南', '河北', '江苏', '浙江', '湖南', '福建', '吉林'],
            type: 'category',
            splitLine: {show: false},
            axisLine: {
              show: true,
              lineStyle: {
                color: "#c7c7c7"
              }
            },
            inverse: true,
            axisLabel: {
              interval: 0,
              color: "#444",
              formatter: function (text) {
                index++
                return index + " " + text;
              }
            },
            axisTick: {
              show: false
            },
            offset: 0,
            nameTextStyle: {
              fontSize: 15
            },

          },
          xAxis: {
            splitLine: {
              lineStyle: {
                color: '#c7c7c7',
                type: (params) => {
                  return 'dotted'
                }
              }
            },
            axisLabel: {
              formatter: function () {
                return "";
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            type: 'value',
          },
          tooltip: {
            show: true,
            textStyle: {
              color: '#000'
            },
            padding: [
              8,  // 上
              15, // 右
              8,  // 下
              15, // 左
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'radius: 10px;'
          },
          series: [{
            name: '转载量',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              color: '#3977E6',
              normal: {
                barBorderRadius: [0, 7.5, 7.5, 0],
                color: (params) => {
                  var color = "";
                  if (params.dataIndex == 0) {
                    color = '#FB5959';
                  } else if (params.dataIndex == 1) {
                    color = '#FFD541';
                  } else if (params.dataIndex == 2) {
                    color = '#46DD31';
                  } else {
                    color = '#99ACFD';
                  }
                  return color;
                }
              }
            },
            data: [100, 95, 90, 87, 66, 56, 50, 45, 44, 40]
          }]
        })
        ;
      }
    },
    mounted: function () {
      this.initHistogram();
    }
  }
</script>

<style scoped>

</style>
