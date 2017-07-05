<template>
  <el-form ref="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动描述">
      <el-input v-model="form.label"></el-input>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          >
        </el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
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
  export default{
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
  }
</script>
<style>

</style>
