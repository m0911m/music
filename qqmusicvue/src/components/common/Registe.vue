<template>
  <div>
    <h1 style="text-align:center">注册页面</h1>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>

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
      
    }
  }
}
</script>
<style scoped>

</style>