<template>
  <div class="hello">
    <div align="center">
      <div style="width: 60%;height: 500px;border:1px solid rgb(180,180,180)" id="homeChart"></div>
      <el-card style="width: 80%" class="box-card">
        <div >
        <el-table
            :data="tableData"
            :header-cell-style="{background:'#F0F4FF'}"
            :row-style="{height: '0',padding: '0px'}"
            :cell-style="{padding: '0px'}"
            v-loading="listLoading"
            element-loading-text="Loading"
            fit
            highlight-current-row
            @row-click="clickTable"
            ref="refTable"
            :class="{activeColor:colorIndex===index}"
        >
          <el-table-column type="expand">
            <template slot-scope="scope">
              <el-tabs tab-position="left">
                <el-tab-pane label="实验统计"><span @click="_goEntDetail( scope.row.reason )"></span>{{ scope.row.reason }}</el-tab-pane>
                <el-tab-pane label="问题记录">{{ scope.row.advice }}</el-tab-pane>
                <el-tab-pane label="建议">{{ scope.row.reference }}</el-tab-pane>
                <el-tab-pane label="提交历史">{{ scope.row.history }}</el-tab-pane>
              </el-tabs>
            </template>
          </el-table-column>
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column
              align="center"
              label="#"
              width="60">
            <template slot-scope="scope">
              {{ scope.$index + 1 }}
            </template>
          </el-table-column
          >
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <span>{{ scope.row.orderNumber }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="院校">
            <template slot-scope="scope">
              <span>{{ scope.row.company }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="专业">
            <template slot-scope="scope">
              {{ scope.row.clientName }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="班级">
            <template slot-scope="scope">
              {{ scope.row.clientPhone }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="学号">
            <template slot-scope="scope">
              {{ scope.row.clientAddress }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="实验开始时间">
            <template slot-scope="scope">
              {{ scope.row.person }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="实验结束时间">
            <template slot-scope="scope">
              {{ scope.row.orderCreateDate }}
            </template>
          </el-table-column>

          <el-table-column align="center" label="实验用时" width="160">
            <template slot-scope="scope">
              {{ scope.row.time }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="实验成绩" width="160">
            <template slot-scope="scope">
              {{ scope.row.grade }}
            </template>
          </el-table-column>
        </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
let echarts = require('echarts');
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      // 获取row的key值
      activeName: 'first',
      listLoading: false,
      isShow:false,
      listQuery: {
        value: 1
      },
      tableData: [{
        orderNumber: '张三',
        company: '大数据学院',
        clientName: '软件工程',
        clientPhone: '1班',
        clientAddress: '20181205071',
        person: '2021.1.1',
        orderCreateDate: '2021.1.1',
        time: '120分钟',
        grade: '99',
        reason: '展开详情内容',
        advice: '展开详情内容',
        reference: '展开详情内容',
        history: '展开详情内容',
      },
        {
          orderNumber: '张三',
          company: '大数据学院',
          clientName: '软件工程',
          clientPhone: '1班',
          clientAddress: '20181205071',
          person: '2021.1.1',
          orderCreateDate: '2021.1.1',
          time: '120分钟',
          grade: '99',
          reason: '展开详情内容',
          advice: '展开详情内容',
          reference: '展开详情内容',
          history: '展开详情内容',
        },
        {
          orderNumber: '张三',
          company: '大数据学院',
          clientName: '软件工程',
          clientPhone: '1班',
          clientAddress: '20181205071',
          person: '2021.1.1',
          orderCreateDate: '2021.1.1',
          time: '120分钟',
          grade: '99',
          reason: '展开详情内容',
          advice: '展开详情内容',
          reference: '展开详情内容',
          history: '展开详情内容',
        }]
    };
  },
  methods: {
    // eslint-disable-next-line
    clickTable(row, index, e) {
      this.$refs.refTable.toggleRowExpansion(row)
      this.isShow=!this.isShow
      this.colorIndex = index;
    }
  },
  mounted(){
    let myChart = echarts.init(document.getElementById('homeChart'));
    myChart.setOption(
        {
          title: {text: '人次'},
          tooltip: {},
          xAxis: {
            data: ["01-01","01-02","01-03","01-04","01-05","01-06"]
          },
          yAxis:{},
          series:[{
            name:'销量',
            type:'line',
            data: [5,20,36,10,10,20]
          }]
        }
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
