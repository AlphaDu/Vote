<template>
  <div>
    <div class="title">
      <div style="float:left ;color:#FFFFFF;">
        <h3 style="line-height: 15px"> 研究开发部投票系统</h3>
      </div>
      <div class="userinfo">
          您好,{{username}}
      </div>
    </div>
    <div class="votelist container-fluid">
      <div class="row"></div>
      <div v-if="hasData">
        <div v-for="data in voteList">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 cellbox">
            <votelist-cell :title="data.title" :label="data.label" :status="data.status"></votelist-cell>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          没有数据
        </div>
      </div>
    </div>
  
  </div>
</template>
<script rel="stylesheet/less">
  import votelistCell from '../../components/voteListCell.vue'
  export default{
    name: 'voteList',
    components: {votelistCell: votelistCell},
    data(){
      return {
        username:this.$root.username,
        voteList: [
          {
            title: 'test12',
            label: 'testlabel',
            status:0
          }, {
            title: 'test12',
            label: 'testlabel',
            status:0
          }, {
            title: 'test12',
            label: 'testlabel',
            status:0
          }, {
            title: 'test12',
            label: 'testlabeltestsetsetestsetsetsetsetestsetestsetsets',
            status:1
          }, {
            title: 'test12',
            label: 'testlabel',
            status:1
          }, {
            title: 'test12',
            label: 'testlabel',
            status:1
          }, {
            title: 'test12',
            label: 'testlabel'
          }
        ]
      }
    },
    computed: {
      hasData: function () {
        return this.voteList.length != 0
      }
      
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  @disX: 50px;
  .userinfo{
    float:right;
    color:#FFFFFF;
    font-size: large;
    padding:10px
  }
  .title {
    position: fixed;
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #484e5a;
    z-index: 999
  }
  
  .votelist {
    position: relative;
    top: 50px
  }
  
  .cellbox {
    text-align: center;
    margin: 20px 0 20px 0;
  }
</style>
