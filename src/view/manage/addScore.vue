<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
      <el-steps :space="100" :active="step" finish-status="success">
        <el-step title="基本属性"></el-step>
        <el-step title="评分项"></el-step>
        <el-step title="评分人"></el-step>
        <el-step title="权限"></el-step>
        <el-step title="权重"></el-step>
      </el-steps>
    </div>
  </div>
</template>
<script>
  import AddBaseAttr from './addBaseAttr.vue'
  import addScoreItem from './addScoreItem.vue'
  import addMember from './addMember.vue'
  import addAuth from './addAuth.vue'
  import addWeight from './addWeight.vue'
  export default{
    data(){
      return {
        step: 2,
      }
    },
    methods: {
      previous(){
        
      },
      next(){
        
      },
      saveToDraft(){
        
      },
      publishScore(){
        
      }
    }
  }
</script>
<style>

</style>
