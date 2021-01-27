<template>
<div>
        <el-menu :default-active="activeIndex" 
                    class="el-menu-demo" 
                    mode="horizontal" 
                    @select="handleSelect"
                    id="new-main"
                    text-color="#000"
                    active-text-color="#FF9E00">
            <el-menu-item index="1" id="new-div-1" @click="chang('全部')">全部</el-menu-item>
            <el-menu-item index="2" id="new-div-2" @click="chang('新闻')">新闻</el-menu-item>
            <el-menu-item index="3" id="new-div-2" @click="chang('通知')">通知</el-menu-item>
            <el-menu-item index="4" id="new-div-2" @click="chang('咨询')">咨询</el-menu-item>
        </el-menu>


        <div id="new-form">
            <template >
                <el-table :data="tableData"
                            show-header
                            style="width: 100%;" 
                            cell-style="border: none; 
                                        margin: 0px;
                                        padding: 0px;" 
                            header-cell-style="border: none;">
                    <el-table-column>
                        <template slot-scope="scope" v-if="targetType==scope.row.type || targetType=='全部'"> 
                            <div id="new-form-div">
                                <div id="new-form-div-img">
                                </div>
                                <div id="new-form-div-infor">
                                    <div id="new-infor-top">
                                        <div id="new-infor-type">{{scope.row.type}}</div>
                                        <div id="new-infor-date">{{scope.row.date}}</div>
                                    </div>
                                    <div id="new-form-title">
                                    {{scope.row.title}}
                                    </div>
                                    <div id="new-form-summary">
                                    {{scope.row.summary}}
                                    </div>

                                    <div id="new-button"> 
                                        <el-button type="text" style="color:black;" id="news-content">默认按钮</el-button>
                                        <div id="news-content-img"></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </template>
                    </el-table-column>  
                </el-table>
            </template>
        </div>

        <el-pagination
            background
            style="margin-left:80%;
                    margin-top:15px;
                    height:20px"
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
</div>
</template>



<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        targetType:'全部',
        pp:"",

        tableData: [{
          type:'新闻',
          date: '2018-05-02',
          title: '重大新闻重大新闻重大新闻重大新闻重大新闻重大新闻重大新闻',
          summary: '内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介'
        }, {
          type:'通知',
          date: '2026-05-04',
          title: '重大通知重大通知重大通知重大通知重大通知重大通知重大通知',
          summary: '内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介'
        }, {
          type:'咨询',
          date: '2008-05-01',
          title: '重大咨询重大咨询重大咨询重大咨询重大咨询重大咨询重大咨询',
          summary: '内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介'
        },{
          type:'咨询',
          date: '2008-05-01',
          title: '重大咨询重大咨询重大咨询重大咨询重大咨询重大咨询重大咨询',
          summary: '内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介'
        }]

      };
    },
    methods: {
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      chang(p){
          this.targetType=p;
          console.log(this.type);
      },
    }
  }
</script>
<style>
    *{
        margin: 0px;
        padding: 0px;
    }
    #box{
        border: 1px solid red;
    }
        #new-main{
            background: #DEDDDD;
            height: 50px;
        }
            #new-div-1{
                background: #DEDDDD;
                font-weight: 1000;
                font-size:18px;
                height: 40px;
                line-height: 40px;
                padding: 0px;
                margin-left:70%;
                margin-right:2%;
                margin-top:5px;
                margin-bottom:5px;
            }
            #new-div-2{
                background: #DEDDDD;
                height: 40px;
                padding: 0px;
                line-height: 40px;
                font-weight: 700;
                font-size:18px;
                margin-right:2%;
                margin-top:5px;
                margin-bottom:5px;
            }
        #new-form{
            border: 1px solid red;
            margin: 0 auto;
            width: 90%;
        }
            #new-form-div{
                margin-top: 15px;
                width: 100%;
                height: 310px;
                border: 2px solid rgb(212, 212, 212);
                display: flex;
                justify-content: space-between;
                box-shadow:2px 2px 5px #909090;
            }
                #new-form-div-img{
                    width: 40%;
                    height: 300px;
                    /* border: 1px solid red; */
                    margin-bottom: 5px;
                    background-image: url('textnews.png');
                    background-size:100% 100%;
                }
                #new-form-div-infor{
                    /* border: 1px solid red; */
                    height: 300px;
                    width: 56%;
                }
                    #new-infor-top{
                        /* border: 1px solid red; */
                        width: 100%;
                        height: 15%;
                        display: flex;
                    }
                        #new-infor-type{
                            height: 100%;
                            width: 16%;
                            background: #FF9E00;
                            color: white;
                            font-size: 20px;
                            font-weight: 900;
                            padding: 10px 10px;
                        }
                        #new-infor-date{
                            /* border: 1px solid red; */
                            margin-left: 4%;
                            width: 200px;
                            margin-top: 3%;
                            font-size: 20px;
                            font-weight: 900;
                        }
                    #new-form-title{
                        /* border: 1px solid red; */
                        width: 100%;
                        margin-top: 25px;
                        margin-bottom: 25px;
                        font-size: 25px;
                        font-weight: 900;
                        color: black;
                    }
                    #new-form-summary{
                        /* border: 1px solid red; */
                        width: 80%;
                        height: 40%;
                        color: black;
                        font-size: 18px;
                    }
                    #new-button{
                        display: flex;
                    }
                        #news-content{
                            font-size: 18px;
                            font-weight: 900;
                            /* border: 1px solid red; */
                            margin-left: 80%;
                        }
                        #news-content-img{
                            /* border: 1px solid red; */
                            width: 43px;
                            height: 40px;
                            background-image: url('121.png');
                            margin-left: 3%;
                        }
                        
</style>