<template>
    <div id="pieCharts">
        <div :id="pieChartsParams.idName" style="height:350px"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        props: ['pieChartsParams'],
        data () {
            return {
                idName:'pie'
            }
        },
        mounted () {
            var rich = {
                black: {
                    align: 'center',
                    fontSize: 14,
                    padding: [10, 0],
                    color:'#444444'
                },
                blue: {
                    align: 'center',
                    fontSize: 16,
                    padding: [8,0,0,0],
                    fontWeight:'bold'
                }
            }

            var echartData = this.pieChartsParams.data

            var pieChart = echarts.init(document.getElementById(this.pieChartsParams.idName));
            pieChart.showLoading();

            var option = {
                color:['#4642ff','#00c6ff','#46dd31','#ffd541','#ff9241'],
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['55%','60%'],
                        center: ['50%', '50%'],
                        hoverAnimation:false,
                        selectedOffset:5,
                        avoidLabelOverlap:false,//关闭避免标签重叠
                        label:{
                            formatter: function(params, ticket, callback) {
                                return '{black|' + params.name + '：}{black|' + params.value + '篇}\n{blue|'+params.percent+'%}';
                            },
                            rich: rich
                        },
                        data:echartData,
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
