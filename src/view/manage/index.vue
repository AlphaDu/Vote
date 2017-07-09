<template>
  <div>
    <div class="title">
      <div >投票管理系统</div>
      <div >你好</div>
    </div>
    <div class="main row">
      <div class="col-md-2">
        <el-menu mode="vertical" :default-active="active" class="el-menu-vertical-demo sidemenu">
          <el-menu-item index="1" @click="forward('/addVote')"><i class="el-icon-message"></i>新增投票</el-menu-item>
          <el-menu-item index="2" @click="forward('/addScore')"><i class="el-icon-message"></i>新增评分</el-menu-item>
        </el-menu>
      </div>
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">test</div>
  </div>
</template>
<script>
  import AddScoreView from './addScore.vue'
  import AddVoteView from './addVote.vue'
  export default{
    components: {
      AddScoreView: AddScoreView,
      AddVoteVire: AddVoteView
    },
    data(){
      return {}
    },
    computed: {
      active(){
          console.log(this.$route.path);
        switch ( this.$route.path ) {
          case '/addVote':
            return "1";
          case '/addScore' :
            return "2";
        }
      }
    },
    methods: {
      forward(path){
        this.$router.push(path);
      }
    }
  }
</script>
<style scoped>
  .title {
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: dodgerblue;
    display: flex;
    flex-direction: row;
    z-index:999
  }
  
  .sidemenu {
    min-height: 600px;
  }
  
  .main {
    margin-top: 60px;
  }

</style>
