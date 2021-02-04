<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <el-table :data="tableData" stripe style="width: 80%">
            <el-table-column prop="name" label="姓名" >
            </el-table-column>
            <el-table-column prop="academy" label="院校" >
            </el-table-column>
            <el-table-column prop="specialty" label="专业"> </el-table-column>
            <el-table-column prop="class" label="班级"> </el-table-column>
            <el-table-column prop="number" label="学号"> </el-table-column>
            <el-table-column prop="grade" label="实验成绩"> </el-table-column>
            <el-table-column prop="report" label="实验报告"> </el-table-column>
          </el-table></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
        {
          name: 'xxx',
          academy: '建筑学院',
          specialty: '土木工程',
          class: '3班',
          number: '124684651',
          grade: '99',
          report: '查看',
        },
      ],
    };
  },
};
</script>

<style>
</style>