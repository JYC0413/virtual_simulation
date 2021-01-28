<template>
<div>
    <el-container>
  <el-header>
   
    </el-header>
  <el-main  style="background-color:rgb(238,238,238)">  
   
  </el-main>
     <el-footer style="background-color:black"></el-footer>
</el-container>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    getSystem(id){
      this.$router.push({
        path:`/system/${id}`, //es6语法
      })
      // this.$router.push({
      //   path:`/system/${id}`
      // })
    },
    getUser(id,name){
      this.$router.push({
        path:'/user',
        query:{
          id:id,
          name:name
        }
      })
      // this.$router.push({
      //   path:'/user',
      //   query:{
      //     id:id
      //   }
      // })
    }
  }
}
</script>