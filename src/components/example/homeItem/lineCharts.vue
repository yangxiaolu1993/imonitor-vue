<template>
    <div id="lineCharts">
        <div :id="lineChartsParams.idName" style="height:450px"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        props: ['lineChartsParams'],
        data () {
            return {
                idName:'pie'
            }
        },
        mounted () {
            var lineChart = echarts.init(document.getElementById(this.lineChartsParams.idName));
            lineChart.showLoading();
            
            var option = {
                color:['#4642ff','#00c6ff','#46dd31','#ffd541','#ff9241'],
                tooltip: {
                    trigger: 'axis',
                    // formatter: "{b} <br/>{a}: {c}",
                    backgroundColor:'rgba(255,255,255,0.5)',
                    textStyle:{
                        color:'#444'
                    },
                    extraCssText: 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);padding:10px'
                },
                legend: {
                    top: '0',
                    textStyle: {
                        color: '#444',
                    },
                    data: ['综合数值', '转发数', '评论数','阅读数']
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    top: '15%',
                    bottom: '6%',
                    containLabel: true
                },
                toolbox: {
                    "show": false,
                },
                xAxis: {
                    type: 'category',
                    axisLine : {
                        lineStyle: {
                            color: '#afafaf'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    boundaryGap: false,
                    data: ['2017/12/28', '2017/12/29', '2017/12/30', '2017/12/31', '2017/01/01', '2017/01/02', '2017/01/03']
                },
                yAxis: {
                    axisLine: {
                        show:false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#d3d3d3',
                            type:'dashed'
                        }
                    },
                    axisTick: {
                        "show": false
                    },
                    axisLabel: {
                        show:false
                    },
                    type: 'value'
                },
                series: [{
                    name: '综合数值',
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [90, 50, 39, 50, 120, 82, 80]
                }, {
                    name: '转发数',
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [70, 50, 50, 87, 90, 80, 70]
                }, {
                    name: '评论数',
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [290, 200,20, 132, 15, 200, 90]
                },{
                    name: '阅读数',
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [220, 150,20, 72, 45, 180, 58]
                }
            ]
            }
            lineChart.hideLoading();
            lineChart.setOption(option);
        },
    }
</script>