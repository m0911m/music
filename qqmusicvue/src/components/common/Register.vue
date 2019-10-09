<template>
  <div>
    <h1 style="text-align:center">注册页面</h1>
    <mt-field label="用户名"  :attr="{autofocus:true}"  placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"   v-model="password"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email"  v-model="email"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"   v-model="phone"></mt-field>
    <mt-button size="large" type="primary" @click="reg">注册</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username:"",
      password:"",
      email:"",
      phone:""
    }
  },
  methods:{
    reg(){
    // 获取用户输入的用户名
    var u=this.username;
    // 获取用户输入的密码
    var p=this.password;
    // 获取用户输入的邮箱
    var e=this.email
    // 获取用户输入的手机号
    var h=this.phone
    // 用户名和用户密码正则 3-12位字母或数字
    var regu=/^\w{3,12}$/
    // 用户邮箱正则
    var rege=/^\w+@\w+\.[a-z]{2,3}(\.[a-z]{2})?$/
    // 手机号正则
    var regh=/^1[3-8]\d{9}$/
      // 验证用户名
      if(regu.test(u)==false){
        this.$messagebox("用户名格式不正确");
        return;
      }
      // 验证密码
      if(regu.test(p)==false){
        this.$messagebox("密码格式不正确");
        return;
      }
      // 验证手机号
      if(regh.test(h)==false){
        this.$messagebox("手机号格式不正确");
        return;
      }
      // 验证邮箱
      if(rege.test(e)==false){
        this.$messagebox("邮箱格式不正确");
        return;
      }
    }
  }
}
</script>
<style scoped>

</style>