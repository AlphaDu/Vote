<template>

</template>
<script>
  export default{
      props: ['initData'],
    mounted(){
      this.loadInitDataToForm();
    },
      data(){
          return {
              form:{
              }
          }
      },
      methods:{
        isFormDataLegal(){
            return {
                isLegal:true
            }
        },
        submitForm(){
            return this.form
        },
        loadInitDataToForm(){
          if (this.initData && typeof this.initData === 'object'){
            for (let key in this.initData){
                if(this.initData.hasOwnProperty(key) && this.form.hasOwnProperty(key)){
                    this.form[key] = this.initData[key];
                }
            }
          }
        }
      }
  }
</script>
<style scoped>

</style>
