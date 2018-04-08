<template>  
   <div id="barx" style="height:600px"></div>
</template>
<script>
    import echarts from 'echarts'
    export default{
        data(){
            return{
                // mybarCategory:['新浪','腾讯','网易'],
               // mybarValue: [{value:986},{value:699},{value:599}]
                mybarCategory:['新浪','腾讯','网易','今日头条','搜狐','新华社','人民日报','中国经营网','东方财富','红商网'],
                mybarValue: [{value:986},{value:699},{value:599},{value:500},{value:490},{value:480},{value:440},{value:430},{value:400},{value:400}]
            }
        },
        methods:{
            drawbarX(){
                var barX=echarts.init(document.getElementById('barx'));
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
                        left: '10%',
                        top:'20%',
                        bottom: '1%',
                        containLabel: true
                    },
                    xAxis: {
                        show:true,
                        type: 'category',
                        data:this.mybarCategory,
                        splitLine:{show:false},
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color:'#CACACA'
                            }
                        },
                        axisTick: {show: false}
                    },
                    yAxis: {
                        show:false,
                        type:'value',
                        min:0,
                        max:1000,
                        splitLine:{show:false},
                        axisLine: {show: false}, 
                        axisTick: {show: false} 
                    },
                    series: [
                        {
                            name: '文章转载数',
                            type: 'bar',
                            data:this.mybarValue,
                            itemStyle:{
                                    barBorderRadius:30,
                                    color:function(data){
                                            if(data.value>700){
                                                return "#4642FF"
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
                barX.setOption(option);
            }
        },
        mounted(){
            this.drawbarX();
        }
    }
</script>