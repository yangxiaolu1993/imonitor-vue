<template>
  <div id="map" style="height:600px"></div>
</template>

<script>
  import echarts from 'echarts'
  import china from 'echarts/map/js/china';

  export default {
    props: ['mapChartsParams'],
    methods: {
      drawChinaMap() {
        var mapData = this.mapChartsParams;
        var mapChart = echarts.init(document.getElementById('map'));
        var option = {
            tooltip: {
              show: true,
              textStyle: {
                color: '#000'
              },
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            },
            visualMap: {
              min: 0,
              max: 1500,
              left: 'left',
              top: 'bottom',
              text: ['高', '低'],
              // seriesIndex: [1],
              inRange: {
                color: ['#e0ffff', '#006edd']
              },
              orient: 'horizontal',
              inverse: true
            },
            geo: {
              show: true,
              map: 'china',
              roam: false,
              itemStyle: {
                areaColor: '#EEEEEE',
                borderColor: '#fff',
              },
              label: {
                normal: {
                  fontSize: 12,
                  align: 'center',
                  show: true
                },
                emphasis: {
                  show:
                    true
                }
              }
            },
            series: [
              {
                type: 'map',
                name: '文章转载篇数',
                geoIndex: 0,
                // data:mapData
                data:
                  [
                    {name: '北京', value: Math.round(Math.random() * 1000)},
                    {name: '天津', value: Math.round(Math.random() * 1000)},
                    {name: '上海', value: Math.round(Math.random() * 1000)},
                    {name: '重庆', value: Math.round(Math.random() * 1000)},
                    {name: '河北', value: Math.round(Math.random() * 1000)},
                    {name: '河南', value: Math.round(Math.random() * 1000)},
                    {name: '云南', value: Math.round(Math.random() * 1000)},
                    {name: '辽宁', value: Math.round(Math.random() * 1000)},
                    {name: '黑龙江', value: Math.round(Math.random() * 1000)},
                    {name: '湖南', value: Math.round(Math.random() * 1000)},
                    {name: '安徽', value: Math.round(Math.random() * 1000)},
                    {name: '山东', value: Math.round(Math.random() * 1000)},
                    {name: '新疆', value: Math.round(Math.random() * 1000)},
                    {name: '江苏', value: Math.round(Math.random() * 1000)},
                    {name: '浙江', value: Math.round(Math.random() * 1000)},
                    {name: '江西', value: Math.round(Math.random() * 1000)},
                    {name: '湖北', value: Math.round(Math.random() * 1000)},
                    {name: '广西', value: Math.round(Math.random() * 1000)},
                    {name: '甘肃', value: Math.round(Math.random() * 1000)},
                    {name: '山西', value: Math.round(Math.random() * 1000)},
                    {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                    {name: '陕西', value: Math.round(Math.random() * 1000)},
                    {name: '吉林', value: Math.round(Math.random() * 1000)},
                    {name: '福建', value: Math.round(Math.random() * 1000)},
                    {name: '贵州', value: Math.round(Math.random() * 1000)},
                    {name: '广东', value: Math.round(Math.random() * 1000)},
                    {name: '青海', value: Math.round(Math.random() * 1000)},
                    {name: '西藏', value: Math.round(Math.random() * 1000)},
                    {name: '四川', value: Math.round(Math.random() * 1000)},
                    {name: '宁夏', value: Math.round(Math.random() * 1000)},
                    {name: '海南', value: Math.round(Math.random() * 1000)},
                    {name: '台湾', value: Math.round(Math.random() * 1000)},
                    {name: '香港', value: Math.round(Math.random() * 1000)},
                    {name: '澳门', value: Math.round(Math.random() * 1000)}
                  ]
              }
            ]
          }
        ;
        //mapChart.hideLoading();
        mapChart.setOption(option);

      }
    },
    mounted() {
      this.drawChinaMap();
    }
  }
</script>

<style scoped>

</style>
