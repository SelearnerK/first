<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--    <el-test></el-test>-->
    <!--<router-link to="/my">myfirst</router-link>
    <router-link to="/hello">hello</router-link>
    <router-view></router-view>-->
    <step-show></step-show>
    <select-func></select-func>
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MyFirst from "@/components/myFirst";
//import elTest from "@/components/sonComponents/elTest";
import selectFunc from "@/components/selectFunc";
import stepShow from "@/components/stepShow";
export default {
  name: 'App',
  components: {
    stepShow,
    selectFunc,
    //MyFirst,
    //HelloWorld,
    // elTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
