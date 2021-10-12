
<template>
  <div>
    <el-row>
      <el-button disabled >厌氧-好氧（A/0）</el-button>
    </el-row>
    <el-row>
      <el-button @click="selectA20">厌氧-缺氧-好氧（A2/0）</el-button>
    </el-row>
    <el-row>
      <el-button @click="selectO3">臭氧（03）</el-button>
    </el-row>
    <el-row>
      <el-button disabled>混凝（CF）</el-button>
    </el-row>
    <el-row>
      <el-button disabled>吸附（AD）</el-button>
    </el-row>
    <el-row>
      <el-button disabled>紫外消（UV)</el-button>
    </el-row>
    <label>{{message}}</label>
    <el-timeline>
      <el-timeline-item  timestamp="第一步" placement="top">
        <el-card>
          <h4>{{message}}</h4>

        </el-card>
      </el-timeline-item>
      <el-timeline-item  timestamp="第二步" placement="top">
        <el-card>
          <h4>{{message}}</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>








  </div>

</template>

<script>
//此文件为选择功能部分
export default {
  name: "selectFunc",
  data(){
    return{
      message:''
    }

  },
  methods:{
    selectO3:function (){
      this.message="你选中了臭氧"
    },
    selectA20:function (){
      this.message="你选中了A20"
    }
  }

}

</script>

<style scoped>

</style>