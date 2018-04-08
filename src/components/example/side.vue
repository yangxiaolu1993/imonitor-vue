<template>
    <div class="sidebarBox" id="sidebar">
        <div class="sideFix">
            <ul class="nav sidebar-menu">
                <li v-for="sideList in sidebarList" :key="sideList.id" @click="showChild(sideList)" :class="{ active: sideList.show, open: sideList.open }" >
                    <a href="javascript:;">
                        <span class="menu-text"> {{sideList.name}} </span>
                    </a>
                    <ul class="submenu" v-if="sideList.child.length>0">
                        <li v-for="childList in sideList.child" :key="childList"> 
                            <a href="javascript:;">
                                <span class="menu-text"> {{childList}} </span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                sidebarList: [
                    {id: 1, name: '苏州广播电视台总台', show: true, open: false, child: []},
                    {id: 2, name: '名称苏州网',  show: false, open: false, child: []},
                    {id: 3, name: '看苏州APP',  show: false, open: false, child: []},
                    {id: 4, name: '无线苏州APP',  show: false, open: false, child: []},
                    {id: 5, name: '微信',  show: false, open: true, child: ['微信01','微信02','微信03','微信04','微信05']},
                    {id: 6, name: '微博',  show: false, open: true, child: ['微博01','微博02','微博03','微博04','微博05']}
                ],
                isActive: false
            }
        },
        methods: {
            showChild (list) {
                for (var i = 0; i < this.sidebarList.length; i++) {
                    this.sidebarList[i].show = false
                    // this.sidebarList[i].open = false
                }
                list.show = !list.show
                // if (list.child.length > 0) {
                //     list.open = !list.open
                // }
            }
        }
    }
</script>
<style lang="css">
    @import '../../assets/css/example/side.css' 
</style>