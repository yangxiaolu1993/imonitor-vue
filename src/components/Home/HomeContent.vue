<template>
  <div class="overView">

    <div class="test">

    </div>

    <div class="viewItem">
      <h5 class="viewItemTitle">
        传播情况统计
      </h5>

      <div class="statistical viewItemMain">
        <ul>
          <li v-for="item in spreadData" :key="item">
            <div class="grid-content">
              <div class="statisticalItem">
                <div class="itemBox">
                  <p>{{item.title}}</p>
                  <p>{{item.count>=10000?(item.count/10000).toFixed(2)+'万':item.count}}</p>
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
              <piecharts :pieData="getPlatformPercent()"/>
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
                  <li>
                    <span :style="note">9</span>
                  </li>
                  <li>
                    <span :style="note">6</span>
                  </li>
                  <li>
                    <span :style="note">5</span>
                  </li>
                  <li>
                    <span :style="note">5</span>
                  </li>
                  <li>
                    <span :style="note">1</span>
                  </li>
                  <li>
                    <span :style="note">2</span>
                  </li>
                  <li>
                    <span :style="note">3</span>
                  </li>
                  <li>
                    <span :style="note">0</span>
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
              原创文章占比1
            </h5>
            <div class="viewItemMain platCon">
              <piecharts :pieData="getOriginalPercent()"/>
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
                    <span class="percentage"
                          :style="{ 'color': getColor(scope.row.sequential) }">{{ scope.row.sequential }}</span>
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
          <linecharts :lineChartsParams="timeTrend"/>
        </div>
      </div>
    </div>
    <div class="viewItem">
      <el-row>
        <el-col :span="14">
          <div class="map">
            <h5 class="viewItemTitle">
              传播地域分析
            </h5>
            <mapCharts style="margin-bottom: 50px"/>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="histogram-box">
            <div class="histogram-title">
              <div class="left">
                <div>覆盖地域数量</div>
                <span>10</span>
              </div>
              <div class="right">
                <div>江苏地区转载数量</div>
                <span>1000</span>
              </div>
            </div>
            <histogram class="histogram" idName="fgdy"/>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="viewItem ">
      <h5 class="viewItemTitle">
        媒体转载分析
      </h5>
      <div class="reprint">
        <el-row>
          <el-col :span="12">
            <div class="left-top-box">
              <div class="box-title">
                转载媒体占比
              </div>
              <piecharts :pieData="getOriginalPercentA()"/>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="right-top-box">
              <div class="box-title">
                媒体转载渠道
              </div>
              <piecharts :pieData="getOriginalPercentB()"/>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="left-bottom-box">
              <div class="box-title">
                平台转载排行
              </div>
              <histogram class="histogram" idName="ptzz"/>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="right-bottom-box">
              <div class="box-title">
                媒体转载排行
              </div>
              <histogram class="histogram" idName="mtzz"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  import pieCharts from '@/components/common/pieCharts'
  import lineCharts from '@/components/common/lineCharts'
  import mapCharts from '@/components/common/mapCharts'
  import histogram from '@/components/home/histogram'

  export default {
    name: 'home-content',
    components: {
      'piecharts': pieCharts,
      'linecharts': lineCharts,
      'mapCharts': mapCharts,
      'histogram': histogram
    },
    data() {
      return {
        spreadData: [
          {title: '阅读数', count: '1234567'},
          {title: '转载数', count: '1000000'},
          {title: '收藏数', count: '1000000'},
          {title: '分享数', count: '1000000'},
          {title: '评论数', count: '1000000'},
          {title: '点赞数', count: '1000000'},
          {title: '打赏数', count: '8838'},
        ],
        note: {
          backgroundImage: "url(" + require("../../assets/image/artBg.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        },
        tableData: [
          {
            title: '原创文章',
            sequential: '34.67%',
            sequentialtext: '57',
            prevWeek: '46',
            week: '103'
          },
          {
            title: '非原创文章',
            sequential: '-27%',
            sequentialtext: '-174',
            prevWeek: '270',
            week: '96'
          }],
        timeTrend: {
          'idName': 'timeTrendCharts'
        }
      }
    },

    methods: {
      getColor: (sequential) => {
        return !sequential.startsWith("-") ? '#fb5959' : '#46dd31';
      },
      getPlatformPercent: function () {
        return {
          pieIdName: 'platformPercent',
          pieName: '转载占比',
          pieFormatterFun: (params, ticket, callback) => {
            return '{black|' + params.name + '：}{black|' + params.value + '篇}\n{blue|' + params.percent + '%}';
          },
          pieRich: {
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
          },
          radius: ['40%', '45%'],
          center: ['55%', '50%'],
          data: [{
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
          }],
          pieColor: ['#4642ff', '#00c6ff', '#46dd31', '#ffd541', '#ff9241']
        }
      },
      getOriginalPercent: function () {
        return {
          pieIdName: 'originalPercent',
          pieName: '原创与非原创',
          pieFormatterFun: (params, ticket, callback) => {
            return '{black|' + params.name + '：}{black|' + params.value + '篇}\n{blue|' + params.percent + '%}';
          },
          pieRich: {
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
          },
          data: [{
            value: 103,
            name: '原创'
          }, {
            value: 96,
            name: '非原创'
          }],
          pieColor: ['#4642ff', '#00c6ff']
        }
      },
      getOriginalPercentB: function () {
        return {
          pieIdName: 'originalPercentB',
          pieName: '原创与非原创',
          pieFormatterFun: (params, ticket, callback) => {
            return '{black|' + params.name + '：}{black|' + params.value + '篇}\n{blue|' + params.percent + '%}';
          },
          pieRich: {
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
          },
          data: [{
            value: 103,
            name: '原创'
          }, {
            value: 96,
            name: '非原创'
          }],
          pieColor: ['#4642ff', '#00c6ff']
        }
      },
      getOriginalPercentA: function () {
        return {
          pieIdName: 'originalPercentA',
          pieName: '原创与非原创',
          pieFormatterFun: (params, ticket, callback) => {
            return '{black|' + params.name + '：}{black|' + params.value + '篇}\n{blue|' + params.percent + '%}';
          },
          pieRich: {
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
          },
          data: [{
            value: 103,
            name: '原创'
          }, {
            value: 96,
            name: '非原创'
          }],
          pieColor: ['#4642ff', '#00c6ff']
        }
      },

    }
  }
</script>

<style>
  @import '../../assets/css/home/common.css';
  @import '../../assets/css/home/overView.css';

  .test {
    background-color: #4642FF;
    height: 200px;
  }
</style>
