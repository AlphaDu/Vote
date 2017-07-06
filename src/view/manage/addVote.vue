<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-7 col-md-6 col-lg-4">
        <div class="stepbox">
          <el-steps :space="100" :active="step">
            <el-step title="基本属性"></el-step>
            <el-step title="投票项"></el-step>
            <el-step title="投票人"></el-step>
            <el-step title="权限"></el-step>
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
    <div class="row">
      <div class="col-xs-11">
        <div class="pagebox">
          <transition name="fade">
            <add-base-attr v-if="step === 0" ref="steppage" :initData="loadCurrentForm(0)"></add-base-attr>
            <add-item v-else-if="step === 1" ref="steppage" :initData="loadCurrentForm(1)"></add-item>
            <add-member v-else-if="step === 2" ref="steppage" :initData="loadCurrentForm(2)"></add-member>
            <add-auth v-else-if="step === 3" ref="steppage" :initData="loadCurrentForm(3)"></add-auth>
          </transition>
        </div>
      </div>
    </div>
    <div>
      <el-button-group>
        <el-button-group>
          <el-button type="primary" icon="document">存为草稿</el-button>
          <el-button type="primary" icon="check">发布投票</el-button>
        </el-button-group>
      </el-button-group>
    </div>
  </div>
</template>
<script>
  import addBaseAttr from './addBaseAttr.vue'
  import addItem from './addItem.vue'
  import addMember from './addMember.vue'
  import addAuth from './addAuth.vue'
  
  export default{
    components: {
      addBaseAttr: addBaseAttr,
      addItem: addItem,
      addMember: addMember,
      addAuth: addAuth
    },
    
    data(){
      return {
        step: 0,
        forms: {}
      }
    },
    methods: {
      previous(){
          this.saveCurrentForm();
        this.step--
      },
      next(){
        if (this.$refs.steppage && this.$refs.steppage.isFormDataLegal){
          let result=this.$refs.steppage.isFormDataLegal();
          if (result.isLegal){
            this.saveCurrentForm();
            this.step++;
          } else {
            this.$message.error(result.msg);
          }
          return
        }
        this.saveCurrentForm();
        this.step++
      },
      saveToDraft(){
        
      },
      publish(){
        
      },
      saveCurrentForm(){
        const key="form" + this.step;
        const formData=this.$refs.steppage.form || {};
        this.forms[key]=formData;
      },
      loadCurrentForm(index){
          if (this.forms.hasOwnProperty("form" + index)){
            return this.forms['form' + index];
          }
        return  {};
      },
      
    },
    computed: {
      canGoPrevious(){
        return this.step > 0
      },
      canGoNext(){
        return this.step < 3
      }
    },
    watch: {
      step(val, oldVal){
        
      }
    }
  }
</script>
<style>
  .pagebox {
    min-height: 200px;
  }
  
  .stepbox {
    text-align: center;
    margin: 0 auto;
    padding-left: 10px;
    max-width: 400px;
  }
  
  .row {
    margin-bottom: 10px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
  }
</style>
