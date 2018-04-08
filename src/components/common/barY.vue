<template>  
   <div id="bary" style="height:600px"></div>
</template>
<script>
    import echarts from 'echarts'
    export default{
        methods:{
            drawbarY(){
                var barY=echarts.init(document.getElementById('bary'));
                var option = {
                    title: {},
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type:''
                        },
                        textStyle:{
                            color:'#000'
                        },
                        backgroundColor:'rgba(255, 255, 255, 0.8)'
                    },
                    grid: {
                        left: '67%',
                        right:'3%',
                        top:'20%',
                        bottom: '1%',
                        containLabel: true
                    },
                    xAxis: {
                        show:false,
                        type: 'value',
                        boundaryGap:[0,0.01],
                        splitLine:{show:false},
                        axisLine: {show: false}, 
                        axisTick: {show: false} 
                    },
                    yAxis: {
                        type: 'category',
                        data: ['10 辽宁','9 河南','8 四川','7 江苏','6 山东','5 河北','4 浙江','3 广州','2 上海','1 北京'],
                        splitLine:{show:false},
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color:'#CACACA'
                            }
                        },
                        axisTick: {show: false}
                    },
                    series: [
                        {
                            name: '文章转载数',
                            type: 'bar',
                            data: [{value:400},{value:400},{value:420},{value:440},{value:480},{value:490},{value:500},{value:599},{value:699},{value:986}],
                            itemStyle:{
                                    barBorderRadius:30,
                                    color:function(data){
                                            if(data.value>700){
                                                return "#FB5959"
                                            }else if(data.value>600&&data.value<700){
                                                return "#FFD541"
                                            }else if(data.value>500&&data.value<600){
                                                return "#46DD31"
                                            }else{
                                                return "#99ACFD"
                                            }				
                                        }
                            },
                            barWidth:16,
                            barGap:50
                        }
                    ]
                    
                };
                barY.setOption(option);
            }
        },
        mounted(){
            this.drawbarY();
        }
    }
</script>