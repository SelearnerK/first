<template>
  <div class="test" style="text-align: center">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/my' }">测试</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/hello'}">测试2</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      <router-view class="routv"/>
    </el-breadcrumb>
  </div>
</template>

<script>

export default {
  name: "myFirst"
}
</script>

<style scoped>
.breadcrumb {
  padding: 10px;

  text-align: center;


}
.test{
  padding: 10px;

  text-align: center;
}
.routv{
  position: center;
}
</style>