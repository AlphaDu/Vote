<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="设置全量结果查看" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="设置增量结果查看" name="second">
        <el-form ref="form" :model="form" label-width="200px">
          <el-form-item label="多选">
            <el-switch  v-model="form.multi"></el-switch>
          </el-form-item>
          <el-form-item label="投票前显示结果">
            <el-switch  v-model="form.showResultBeforeVote"></el-switch>
          </el-form-item>
          <el-form-item label="投票后显示结果">
            <el-switch  v-model="form.showResultAfterVote"></el-switch>
          </el-form-item>
          <el-form-item label="投票活动结束后是否公开结果">
            <el-switch  v-model="form.showResultWhenPublished"></el-switch>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      
    </el-tabs>
  </div>
</template>
<script>
  import commonStepView from '../abstract/commonStepFormView.vue'
  export default{
    mixins:[commonStepView],
      data(){
          return {
              form:{
                  multi:false,
                  showResultBeforeVote:false,
                  showResultAfterVote:false,
                  showResultWhenPublished:false
              }
          }
      },
      methods:{
        handleClick(){
            
        }
      }
  }
</script>
<style>

</style>
