<template>
    <div>
        <div class="sidebar">
            <div class="nav toggle" v-on:click="willShow = !willShow"><i class="fa fa-bars"></i></div>
            <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
                <el-menu v-bind:class="{ 'showNav': willShow }" :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
                    <template v-for="item in items">
                        <template v-if="item.subs">
                            <el-submenu :index="item.index">
                                <template slot="title"><i :class="item.icon"></i><span>{{ item.title }}</span></template>
                                <el-menu-item @click="willShow = !willShow" v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                                </el-menu-item>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="item.index" @click="willShow = !willShow">
                                <i :class="item.icon"></i>{{ item.title }}
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </transition>
        </div>
    </div>
</template>
<style type="text/css">
    .com-xinhui .nav { display: none; }
    .com-xinhui .el-menu-vertical-demo { display: block; }
    .com-xinhui .el-menu { border-radius: 0; }
    @media (max-width: 991px){
        .com-xinhui .header .logo { text-align: center; }
        .com-xinhui .el-menu-vertical-demo { display: none; z-index: 9; }
        .com-xinhui .el-menu-vertical-demo.showNav { display: block; }
        .com-xinhui .content { left: 0; }
        .com-xinhui .nav { position: absolute; top: -45px; display: block; left: 20px; font-size: 24px; color: #c5ceda; }
    }
</style>
<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '报价'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '表格',
                        subs: [
                            {
                                index: 'basetable',
                                title: '基础表格'
                            }
                            // ,
                            // {
                            //     index: 'vuetable',
                            //     title: 'Vue表格组件'
                            // }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '表单',
                        subs: [
                            {
                                index: 'baseform',
                                title: '基本表单'
                            },
                            {
                                index: 'formValid',
                                title: '表单校验'
                            },
                            {
                                index: 'vueeditor',
                                title: '编辑器'
                            },
                            // {
                            //     index: 'markdown',
                            //     title: 'markdown'
                            // },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '拖拽'
                    }
                ],
                willShow: false
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
