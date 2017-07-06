<template>
  <el-form ref="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动描述">
      <el-input v-model="form.label"></el-input>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="10">
        <el-date-picker
          v-model="form.date1"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          >
        </el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="10">
        <el-date-picker
          v-model="form.date2"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          >
        </el-date-picker>
      </el-col>
    </el-form-item>
  </el-form>
</template>

<script>
  import commonStepView from '../abstract/commonStepFormView.vue'
  export default{
    mixins:[commonStepView],
    data() {
      return {
        form: {
          name: '',
          label: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods:{
      isFormDataLegal(){
          if(!this.form.name.trim()){
              return {
                  isLegal:false,
                  msg:'活动名称不能为空'
              }
          }
          if (!this.form.date1.toString().trim() || !this.form.date2.toString().trim()){
              return {
                  isLegal:false,
                  msg:'活动开始时间及结束时间均必填'
              }
          }
          if (new Date(this.form.date1) > new Date(this.form.date2)){
              return {
                  isLegal:false,
                  msg:'结束时间不能在开始时间之前'
              }
          }
          return {
              isLegal:true
          }
      }
    }
  }
</script>
<style>

</style>
