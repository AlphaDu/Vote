<template>
  <div>
    <div class="inputbox">
      <el-form ref="form" label-width="80px">
        <el-form-item label="选项名称">
          <el-input v-model="form.name" :maxlength="nameLength"></el-input>
        </el-form-item>
        <el-form-item label="选项简介">
          <el-input v-model="form.label"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="addItem">添加</el-button>
    </div>
    <div class="line"></div>
    <div class="dragbox">
      <draggable v-model="form.list" :options="dragOptions">
        <transition-group type="transition">
          <div v-for="(element,index) in form.list" :key="element.id" class="dragableColumn">
            <span class="name" :maxlength="nameLength">{{element.name}}</span>
            <span class="lab">{{element.label|| '无简介'}}</span>
            <i class="el-icon-close delBtn" @click="deleteItem(index)"></i>
          </div>
        </transition-group>
      </draggable>
    </div>
  
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  import commonStepView from '../abstract/commonStepFormView.vue'
  export default{
    components: {
      draggable,
    },
    mixins: [commonStepView],
    data(){
      return {
        nameLength: 20,
        form: {
          name: '',
          sort: '',
          label: '',
          list: [
            {
              id: 0,
              name: 'test'
            }, {
              id: 1,
              name: 'test2'
            }, {
              id: 3,
              name: 'test3'
            }, {
              id: 4,
              name: 'test4'
            }, {
              id: 5,
              name: 'test5'
            }, {
              id: 6,
              name: 'test6'
            }, {
              id: 7,
              name: 'test7'
            }
          ]
        },
        gridData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      }
    },
    methods: {
      _validateform(){
        
      },
      isFormDataLegal(){
        if (!this.form.list || this.form.list.length === 0) return {
          isLegal: false,
          msg: '投票项为空'
        };
        return {
          isLegal: true
        }
      },
      deleteItem(index){
        this.form.list.splice(index, 1);
      },
      showDraggableMsg(){
        this.$notify({
          title: '警告',
          message: '下方列表可拖动排序',
          type: 'warning'
        });
      },
      addItem(){
        if (!this.form.name){
          this.$message.error("选项名称不能为空");
          return
        }
        this.form.list.push({
          id: this.form.name + parseInt(Math.random() * 100),
          name: this.form.name,
          label: this.form.label
        })
      }
    },
    computed: {
      dragOptions(){
        return {
          animation: 0,
          ghostClass: 'ghost'
        }
      }
    },
    mounted(){
     
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  .dragableColumn {
    height: 41px;
    margin: 1px 0 1px 0;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s;
    cursor:move;
    .name {
      margin-right: 10px;
      flex: 1
    }
    .lab {
      flex: 8
    }
    .delBtn {
      margin-right: 10px;
      flex: 1;
      cursor: pointer;
    }
  }
  
  .ghost {
    background: #C8EBFB;
  }
  
  .line {
    box-sizing: border-box;
    background: rgb(32, 160, 255);
    width: 100%;
    height: 1px
  }
  
  .inputbox {
    margin-bottom: 27px;
  }
  
  .dragbox {
    background-color: darkgray;
    margin-top: 27px;
  }
  
  .deleteBtn {
    margin-right: 20px;
  }

</style>
