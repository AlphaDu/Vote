<template>
  <div>
    <el-popover
      ref="popdetail"
      placement="right"
      width="400"
      trigger="click">
      <div class="popbox">
        {{detail}}
      </div>
    </el-popover>
    <div class="row columnbox">
      <div class="col-xs-1 box"><p>{{name}}</p></div>
      <div class="col-xs-7 box" >
        <el-progress :text-inside="true" :stroke-width="18" :percentage="progress" status="exception"></el-progress>
      </div>
      <div class="col-xs-3 box">
        <h5 style="display:inline-block;margin-right: 20px">{{detail.slice(0,4)}}</h5>
        <el-button v-popover:popdetail type="info" size="mini" >详细 </el-button>
      </div>
    </div>
    
  </div>
</template>
<script>
  export default {
    props: {
      name: String,
      progress(val){
        return 0 <= val && 0 <= 100
      },
      label: String,
      detail: String
    }
  }
</script>
<style>
  .box{
    text-align: center;
    vertical-align:middle;
    float: none;
    display: inline-block !important
  }
  .popbox {
    width:400px;
    height:400px;
    padding:10px 20px 10px 10px;
    word-wrap: break-word;
  }
</style>
