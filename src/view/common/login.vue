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
      <div class="login-input">
          <div >
            <el-input v-model="username" placeholder="用户名"></el-input>
          </div>
          <div>
            <el-input v-model="password" type="password" placeholder="密码"></el-input>
          </div>
        <div>
            <el-button>登录</el-button>
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
        username: '',
        password: ''
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  
  .text-center {
    line-height: 55px;
    margin: 0
  }
  
  .login-box {
    padding: 0
  }
  
  .login-title {
    text-align: center;
    background-color: rgb(32, 130, 213);
    height: 54px;
    color: #FFFFFF;
    
  }
  
  .login-box {
    border-style: solid;
    border-radius: 2px;
    border-width: 1px;
    height: 300px;
    max-width: 400px;
    text-align: center;
    .login-input{
      width:100%;
      height:246px;
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      align-items:center;
      div{
        width:300px
      }
    }
  }
  
 

</style>
