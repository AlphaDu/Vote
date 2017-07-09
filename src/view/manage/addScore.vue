<template>
  <div class="add-score-body">
    <div class="row">
      <div class="col-xs-12 col-sm-7 col-md-6 col-lg-4">
        <div class="stepbox">
          <el-steps :space="100" :active="step">
            <el-step title="基本属性"></el-step>
            <el-step title="评分项"></el-step>
            <el-step title="评分人"></el-step>
            <el-step title="权限"></el-step>
            <el-step title="权重"></el-step>
          </el-steps>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-5 col-lg-3 col-lg-offset-4">
        <el-button-group>
          <el-button type="primary" icon="arrow-left" @click="previous" :disabled="!canGoPrevious">Previous</el-button>
          <el-button type="primary" @click="next"
                     :disabled="!canGoNext">Next<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
  import AddBaseAttr from './addBaseAttr.vue'
  import addScoreItem from './addScoreItem.vue'
  import addMember from './addMember.vue'
  import addAuth from './addAuth.vue'
  import addWeight from './addWeight.vue'
  import addVote from './addVote.vue'
  export default{
    mixins: [addVote],
    data(){
      return {
        step: 0,
        forms: {}
      }
    },
    methods: {
      
      saveToDraft(){
        
      },
      publishScore(){
        
      }
    },
    computed: {
      
      canGoNext(){
        return this.step < 4
      }
    },
  }
</script>
<style scoped>
  .add-score-body{
    margin-top: 30px;
  }
</style>
