<template>
  <div>
    <mt-field label="用户名" placeholder="请输入用户名" :attr="{autofocus:true}" v-model="uname"></mt-field>
    <mt-field type="password" label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
    <mt-button size="large" @click="login">登录</mt-button>
    <mt-button size="large" @click="registe">注册</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      uname:"",
      upwd:""
    }
  },  
  methods:{
    registe(){
      //跳转至registe页面
      this.$router.push("/registe");
    },
    login(){
      var u=this.uname;
      var p=this.upwd;
      var reg=/^\w{3,12}$/;
      if(reg.test(u)==false){
        this.$messagebox("用户名格式不正确");
        return;
      }
      if(reg.test(p)==false){
        this.$messagebox("密码格式不正确");
        return;
      }
      // 发送axios请求
      var url="login";
      var obj={uname:u,upwd:p};
      this.axios.get(
        url,
        {params:obj}
      ).then(res=>{
        console.log(res.data.code);
        if(res.data.code<0){
          this.$messagebox("消息","用户名或密码有误")
        }else{
          //跳转至wode页面
          this.$router.push("/wode");
          // location.href="http://127.0.0.1:8080/#/wode"
        }
      });
    }
  }
}
</script>
<style scoped>

</style>