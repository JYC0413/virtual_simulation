<template>
    <div id="exp-box">
        <div id="exp-router">
            <div id="exp-router-back">
                <div id="exp-router-back-img"></div>
                <el-button id="exp-router-back-write" type="text">返回</el-button>
            </div>
                <el-menu default-active="1" 
                        class="el-menu-vertical-demo" 
                        style="margin-top:60px;border:none;"
                        active-text-color="#FF9E00">
                    <el-menu-item index="1">
                        <span slot="title" id="exp-router-write" @click="toSynopsis()">简介信息</span>
                    </el-menu-item>
                    <el-menu-item index="2" >
                        <span slot="title" id="exp-router-write">详细信息</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <span slot="title" id="exp-router-write">特色信息</span>
                    </el-menu-item>
                </el-menu>
        </div>

        <div id="exp-main">
            <keep-alive>
                <router-view/>
          </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toSynopsis(){
                this.$router.push({
              path:'/synopsis',
          });
        }
    }
}
</script>

<style>
    *{
        margin: 0px;
        padding: 0px;
    }
        #exp-box{
            display: flex;
            /* border: 1px solid rgb(0, 0, 0); */
        }
            #exp-router{
                width: 10%;
                height: 30%;
                /* border: 1px solid red; */
                margin-left: 6%;
                margin-top: 4%;
            }
                #exp-router-back{
                    height: 30px;
                    line-height: 30px;
                    width: 100%;
                    /* border: 1px solid red; */
                    display: flex;
                }
                    #exp-router-back-img{
                        /* border: 1px solid red; */
                        width: 39px;
                        height: 30px;
                        background-image: url('../../assets/exp-back.png');
                    }
                    #exp-router-back-write{
                        padding-top: 5px;
                        /* border: 1px solid red; */
                        margin-left: 7%;
                        font-size: 23px;
                        font-weight: 600;
                        color: #FF9E00;
                    }
                        #exp-router-write{
                            margin-left: 30%;
                            font-size: 25px;
                            font-weight: 600;
                            /* color: #FF9E00; */
                            /* color: black; */
                        }
            #exp-main{
                /* border: 1px solid rgb(0, 17, 255); */
                width: 70%;
                margin-left: 12%;
                margin-top: 9%;
            }
</style>