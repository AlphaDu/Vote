<template>
  <div class="cardbox">
    <div :class="statusClass">
      <div class="titlebox"><h3 style="margin:0;line-height: 40px">{{title}}</h3></div>
      <div class="labelbox"><p>{{label}}</p></div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'votelistCell',
    props: ['title', 'label', 'creator', 'createdTime', 'cutOffDate', 'status', 'onClick','voteid'],
    data(){
      return {}
    },
    computed:{
        statusClass(){
            //status:0:投票中，1完成，-1过期
              switch(this.status){
                case 0:return 'card-processing';
                case 1:return 'card-complete';
                case -1:return 'card-expired';
                default:return 'card-expired'
              }
    }
        
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .labelbox{
    word-wrap: break-word;
    margin:10px;
    text-align:left
    
  }
  .titlebox{
    height:40px;
    background: #484e5a;
    width:100%;
    border-radius: 4px 4px 0 0 ;
  }
  .card {
    width: 270px;
    height: 300px;
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 1px;
    padding:0;
    cursor:pointer;
    margin:0 auto;
  }
  
  .card-complete {
    .card;
    border-color: rgb(214, 233, 198);
    border-radius: 4px;
    .titlebox{
      background: rgb(214, 233, 198);
    }
  }
  
  .card-processing {
    .card;
    border-color: rgb(66, 139, 202);
    border-radius: 4px;
    .titlebox{
      background-color: rgb(66, 139, 202);
    }
  }
  
  .card-expired {
    .card;
    border-color: rgb(221, 221, 221);
    border-radius: 4px;
    .titlebox{
      border-color: rgb(221, 221, 221);
    }
  }
  
</style>
