<template>
    <div class="header">
        <div class="logo">鑫汇后台管理系统</div>
        
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout"><i class="glyphicon glyphicon-off"></i>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'linxin'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .header { position: relative; box-sizing: border-box; width: 100%; height: 70px; font-size: 1.5rem; color: #fff; }
    .header .logo { padding-left: 20px; line-height: 70px; }
    .header .user-info { position: absolute; top: 0; right: 20px; height: 50px; line-height: 50px; font-size: 16px; color: #fff; }
    .header .el-dropdown { margin-top: 10px; height: 50px; }
    .header .user-info .el-dropdown-link{ position: relative; display: inline-block; padding-left: 50px; color: #fff; cursor: pointer; vertical-align: middle; }
    .header .user-info .user-logo{ position: absolute; left:0; top:5px; width:40px; height:40px; border-radius: 50%; }
    .el-dropdown-menu { padding: 0; }
    .el-dropdown-menu .glyphicon { padding-right: 5px; }
    .el-dropdown-menu__item{text-align: center;}
</style>
