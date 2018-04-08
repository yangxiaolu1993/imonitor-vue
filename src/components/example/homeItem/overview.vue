<template>
    <div class="overView" id="overView">
        <div class="viewItem">
            <h5 class="viewItemTitle">
                传播情况统计
            </h5>
            <div class="statistical viewItemMain">
                <ul>
                    <li>
                        <div class="grid-content">
                            <div class="statisticalItem">
                                <div class="itemBox">
                                    <p>阅读数</p>
                                    <p>100万</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid-content">
                            <div class="statisticalItem">
                                <div class="itemBox">
                                    <p>转载数</p>
                                    <p>1000.45万</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid-content">
                            <div class="statisticalItem">
                                <div class="itemBox">
                                    <p>收藏数</p>
                                    <p>100万</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid-content">
                            <div class="statisticalItem">
                                <div class="itemBox">
                                    <p>分享数</p>
                                    <p>100万</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid-content">
                            <div class="statisticalItem">
                                <div class="itemBox">
                                    <p>评论数</p>
                                    <p>100万</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid-content">
                            <div class="statisticalItem">
                                <div class="itemBox">
                                    <p>点赞数</p>
                                    <p>100万</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="grid-content">
                            <div class="statisticalItem">
                                <div class="itemBox">
                                    <p>打赏数</p>
                                    <p>100万</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="viewItem">
            <el-row>
                <el-col :span="11">
                    <div class="grid-content">
                        <h5 class="viewItemTitle">
                            各平台作品数占比
                        </h5>
                        <div class="viewItemMain platCon">
                            <!-- <div id="homeCharts" style="height:350px"></div> -->
                            <piecharts :pieChartsParams="platParams"></piecharts>
                        </div>
                    </div>
                </el-col>
                <el-col :span="13">
                    <div class="grid-content">
                        <h5 class="viewItemTitle">
                            作品数
                        </h5>
                        <div class="viewItemMain articalCount">
                            <div>
                                <ul>
                                    <li >
                                        <span :style ="note">9</span>
                                    </li>
                                    <li >
                                        <span :style ="note">6</span>
                                    </li>
                                    <li >
                                        <span :style ="note">5</span>
                                    </li>
                                    <li >
                                        <span :style ="note">5</span>
                                    </li>
                                    <li >
                                        <span :style ="note">1</span>
                                    </li>
                                    <li >
                                        <span :style ="note">2</span>
                                    </li>
                                    <li >
                                        <span :style ="note">3</span>
                                    </li>
                                    <li >
                                        <span :style ="note">0</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="viewItem">
            <el-row>
                <el-col :span="11">
                    <div class="grid-content">
                        <h5 class="viewItemTitle">
                            原创文章占比
                        </h5>
                        <div class="viewItemMain platCon">
                            <piecharts :pieChartsParams="oriArtParams"></piecharts>
                        </div>
                    </div>
                </el-col>
                <el-col :span="13">
                    <div class="grid-content">
                        <h5 class="viewItemTitle"></h5>
                        <div class="viewItemMain articalCon">
                            <el-table
                                :data="tableData"
                                style="width: 100%">
                                <el-table-column
                                  prop="title"
                                  label=""
                                  width="180">
                                </el-table-column>
                                <el-table-column
                                  label="周环比"
                                  width="180">
                                    <template slot-scope="scope">
                                        <span class="red percentage">{{ scope.row.sequential }}</span>
                                        <span>{{ scope.row.sequentialtext }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                  prop="prevWeek"
                                  label="上周">
                                </el-table-column>
                                <el-table-column
                                  prop="week"
                                  label="本周">
                                </el-table-column>
                              </el-table>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="viewItem">
            <div class="grid-content">
                <h5 class="viewItemTitle">
                    传播时间趋势
                </h5>
                <div class="viewItemMain platCon">
                    <linecharts :lineChartsParams="timeTrend"></linecharts>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import pieCharts from '@/components/example/homeItem/pieCharts.vue'
    import lineCharts from '@/components/example/homeItem/lineCharts.vue'
    export default {
        name: 'hello',
        components: {
            'piecharts':pieCharts,
            'linecharts':lineCharts
        },
        data () {
            return {
                platParams:{
                    'idName':'platCharts',
                    'data':[{
                                value: 103,
                                name: '名城苏州网'
                            }, {
                                value: 96,
                                name: '微信'
                            }, {
                                value: 142,
                                name: '看苏州APP'
                            }, {
                                value: 78,
                                name: '无线苏州APP'
                            }, {
                                value: 109,
                                name: '微博'
                            }]
                },
                oriArtParams:{
                    'idName':'oriArtCharts',
                    'data':[{
                                value: 103,
                                name: '原创'
                            }, {
                                value: 96,
                                name: '非原创'
                            }]
                },
                note:{
                    backgroundImage: "url(" + require("../../../assets/image/artBg.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                },
                tableData: [{
                    title: '原创文章',
                    sequential: '34.67%',
                    sequentialtext: '57',
                    prevWeek: '46',
                    week:'103'
                }, {
                    title: '非原创文章',
                    sequential: '-27%',
                    sequentialtext: '-174',
                    prevWeek: '270',
                    week:'96'
                }],
                timeTrend:{
                    'idName':'timeTrendCharts'
                }
            }
        }
    }
</script>
<style lang="css">
    @import '../../../assets/css/example/homeItem/common.css';
    @import '../../../assets/css/example/homeItem/overView.css'
</style>
