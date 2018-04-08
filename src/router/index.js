import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import HotWork from '@/components/HotWork/HotWork'
import MediaMonitor from '@/components/MediaMonitor/MediaMonitor'
import MediaMonitorSingle from '@/components/MediaMonitor/MediaMonitorSingle'
import Platform from '@/components/Platform/Platform'
import Region from '@/components/Region/Region'
import Reprint from '@/components/Reprint/Reprint'
import Trend from '@/components/Trend/Trend'
import Works from '@/components/Works/Works'
import CompareCopyright from '@/components/compareCopyright/compareCopyright'


import HomeEx from '@/components/example/home'
import OverViewEx from '@/components/example/homeItem/overview'
import HotWorksEx from '@/components/example/homeItem/hotWorks'
import TrendEx from '@/components/example/homeItem/trend'
import RegionEx from '@/components/example/homeItem/region'
import ReprintEx from '@/components/example/homeItem/reprint'
import MonitorEx from '@/components/example/homeItem/monitor'
import PlatContrastEx from '@/components/example/homeItem/platContrast'
import WorkContrastEx from '@/components/example/homeItem/workContrast'
import Customization from '@/components/Customization/Customization'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //传播情况总览
    {path: '/', name: 'Home', component: Home},
    //热门作品
    {path: '/hotwork', name: 'HotWork', component: HotWork},
    //传播趋势分析
    {path: '/trend', name: 'Trend', component: Trend},
    //传播地域分析
    {path: '/region', name: 'Region', component: Region},
    //媒体转载分析
    {path: '/reprint', name: 'Reprint', component: Reprint},
    //重点媒体监测
    {path: '/mediamonitor', name: 'MediaMonitor', component: MediaMonitor},
    //平台对比分析
    {path: '/platform', name: 'Platform', component: Platform},
    //作品对比分析
    {path: '/works', name: 'Works', component: Works},

    //版权对比分析
    {path: '/compareCopyright', name: 'CompareCopyright', component: CompareCopyright},
    //定制监测
    {path: '/customization', name: 'Customization', component: Customization},
    //单个页面
    {path: '/single/:type', name: 'MediaMonitorSingle', component: MediaMonitorSingle},

    {
      path: '/example',
      name: 'Example',
      component: HomeEx,
      children: [
        {path: 'overviewEx', name: 'overviewEx', component: OverViewEx, meta: {title: 'overviewEx'}},
        {path: 'hotworksEx', name: 'hotworksEx', component: HotWorksEx},
        {path: 'trendEx', name: 'trendEx', component: TrendEx},
        {path: 'regionEx', name: 'regionEx', component: RegionEx},
        {path: 'reprintEx', name: 'reprintEx', component: ReprintEx},
        {path: 'monitorEx', name: 'monitorEx', component: MonitorEx},
        {path: 'mlatcontrastEx', name: 'mlatcontrastEx', component: PlatContrastEx},
        {path: 'workcontrastEx', name: 'workcontrastEx', component: WorkContrastEx},
      ]
    },
  ]
})
