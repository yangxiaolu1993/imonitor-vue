<template>
  <div id="pieCharts">
    <div :id="pieData.pieIdName" style="height:350px"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'

  export default {
    props: ['pieData'],
    methods: {
      formatter: (params, ticket, callback) => {
        return '{black|' + params.name + '：}{black|' + params.value + '篇}\n{blue|' + params.percent + '%}';
      }
    },
    mounted() {
      var thiz = this;
      var rich = {
        black: {
          align: 'center',
          fontSize: 14,
          padding: [10, 0],
          color: '#444444'
        },
        blue: {
          align: 'center',
          fontSize: 16,
          padding: [8, 0, 0, 0],
          fontWeight: 'bold',
        }
      }

      console.log(thiz.pieData.pieIdName);
      var pieChart = echarts.init(document.getElementById(thiz.pieData.pieIdName));
      pieChart.showLoading();

      var option = {
        color: thiz.pieData.pieColor ? thiz.pieData.pieColor : ['#4642ff', '#00c6ff', '#46dd31', '#ffd541', '#ff9241'],
        series: [
          {
            name: thiz.pieData.pieName,
            type: 'pie',
            radius: thiz.pieData.radius ? thiz.pieData.radius : ['50%', '55%'],
            center: thiz.pieData.center ? thiz.pieData.center : ['50%', '50%'],
            hoverAnimation: false,
            selectedOffset: 5,
            avoidLabelOverlap: false,//关闭避免标签重叠
            label: {
              formatter: thiz.pieData.pieFormatterFun ? thiz.pieData.pieFormatterFun : thiz.formatter,
              rich: thiz.pieData.pieRich ? thiz.pieData.pieRich : rich
            },
            data: thiz.pieData.data,
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: '#ffffff',
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      pieChart.hideLoading();
      pieChart.setOption(option);
    },
  }
</script>
