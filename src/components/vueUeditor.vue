<template>
  <div ref="editor" ></div>
</template>
<script>
  import '../assets/ueditor/ueditor.config';
  import '../assets/ueditor/ueditor.all';
  import '../assets/ueditor/lang/zh-cn/zh-cn';
  export default {
    name:"ueditor",
    data() {
      return {
        id: Math.random().toString(16).substring(2) + 'ueditorId',
      };
    },
    props: {
      value: {
        type: String,
        default: '',
      },
      config: {
        type: Object,
        default() {return{}},
      }
    },
    watch: {
      value: function value(val, oldVal) {
        this.editor = UE.getEditor(this.id, this.config);
        if (val !== null) {
          this.editor.setContent(val);
        }
        console.log(val);
      },
     
    },
    mounted() {
      this.$nextTick(function f1() {
        // 保证 this.$el 已经插入文档
      
        this.$refs.editor.id = this.id;
        this.editor = UE.getEditor(this.id, this.config);
      
        this.editor.ready(function f2() {
          this.editor.setContent(this.value);
        
          this.editor.addListener("contentchange", function () {
              console.log("contentchange");
              console.log(this.editor.getPlainTxt());
            const wordCount = this.editor.getContentLength(true);
            const content = this.editor.getContent();
            const plainTxt = this.editor.getPlainTxt();
            this.$emit('input', { wordCount: wordCount, content: content, plainTxt: plainTxt });
          }.bind(this));
        
          this.$emit('ready', this.editor);
        }.bind(this));
      });
    },
  };
</script>

<style scoped>
  body{
    background-color:#ff0000;
  }
</style>
