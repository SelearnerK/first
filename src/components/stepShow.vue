<template>
  <div>

    <el-steps :active="active" align-center finish-status="success">
      <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">{{ BtnMessage }}</el-button>
    <el-button style="margin-top: 12px;" @click="back">{{ BtnMessage2 }}</el-button>


  </div>

</template>

<script>
export default {
  name: "stepShow",
  data(){
    return {
      active:0,
      BtnMessage:"下一步",
      BtnMessage2:"上一步"
    };
  },
  methods:{
    next(){
      if (this.active++ >= 2) this.BtnMessage="完成"
    },
    back(){
      this.BtnMessage="下一步"
      if (this.active-- <=0) this.active=0;
      /*在此处切换页面*/
    }
  }
}
</script>

<style scoped>

</style>