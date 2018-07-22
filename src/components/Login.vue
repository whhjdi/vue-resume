<template>
  <div class="login">
    <el-form  @submit.native.prevent class="loginForm" label="left">
      <el-form-item label="用户名">
        <el-input type="text" auto-complete="off" label="left"
        v-model="userLogin.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input type="password" auto-complete="off" label="left"
        v-model="userLogin.userPassword">></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="closeLogin">关闭</el-button>
        <el-button @click="login" label="left">
          登录
          </el-button>
        
      </el-form-item>
    </el-form>
    <!-- <i class="el-icon-error close" @click="closeLogin"></i> -->
  </div>
</template>

<script>
import AV from 'leancloud-storage'
export default {
  data() {
    return {
      userLogin:{
        userName: '',
        userPassword:''
      },

    }
  },
  mounted(){
  },
  methods: {
    closeLogin(){
      this.$router.go(-1)
    },
    login(){
        AV.User.logIn(this.userLogin.userName, this.userLogin.userPassword).then((user) =>{
          this.$emit('signinsuccess', user.toJSON());
          this.closeLogin()
      }, (error)=> {
            if(error.code ===211){
              alert('用户名不存在')
            }else if(error.code ===210){
              alert('密码不匹配')
            }else if(error.code ===undefined){
              alert('登录操作过频繁，请稍后再试!')
            }
      });
    },
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 40px;
    
    .loginForm{
      width: 30em;
      margin: 0 auto;
      border: 1px solid red;
      padding: 20px;
      position: relative;
    }
    .close{
      position: absolute;
      top: 0px;

    }
  }
</style>
