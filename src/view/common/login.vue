<template>
  <div>
    <div class="login-head"></div>
    <div class="login-box container">
      <div class="login-title">
        <h3 class="text-center">
        <img class="icon" src="../../assets/cublogo.png"/>
        研发部投票系统
        </h3>
      </div>
      <div class="row">
        <div class="input-box">
          <el-input v-model="input" placeholder="用户名"></el-input>
        </div>
      </div>
      <div class="row">
        <div class="input-box">
          <el-input v-model="input" placeholder="密码"></el-input>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
          username:'',
          password:''
      }
    }
  }
</script>
<style>
  .text-center{
    line-height:55px;
    margin:0
  }
  .login-box{
    padding:0
  }
  .login-title{
    text-align:center;
    background-color: rgb(32, 130, 213) ;
    height:54px;
    color:#FFFFFF;
    
    
  }
  .login-box{
    border-style:solid;
    border-radius:2px;
    border-width:1px;
    height:300px;
    max-width:400px;
    text-align:center;
  }
.input-box{
  max-width:300px;
  margin:0 auto
}
  
</style>
