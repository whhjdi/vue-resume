<template>
  <div class="login">
    <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="star"
        :particleSize="6"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    <el-form  @submit.native.prevent class="loginForm" label="left">
      <div class="title"><i>Resume By muxue</i></div>
      <div>你这么可爱一定是男孩子</div>
      <el-form-item label="用户名" class="item">
        <el-input type="text" auto-complete="off" label="left" placeholder="请输入用户名"
        v-model="userLogin.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="item">
        <el-input type="password" auto-complete="off" label="left" placeholder="请输入密码"
        v-model="userLogin.userPassword">></el-input>
      </el-form-item>
      <el-form-item class="item">
        <el-button @click="closeLogin" type="danger">关闭</el-button>
          
        <el-button @click="login" label="left" type="primary">
          登录
          </el-button>
        
      </el-form-item>
      <el-form-item class="bottom item">
        没有账号?
        <router-link to="/signup">
          注册
          </router-link>
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
      this.$router.replace('/')
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
    background: #66b1ff;
    font-size: 16px;
    .lizi{
     height: 100%;
    }
    .loginForm{
      width: 25em;
      height: 28em;
      background: #fff;
      padding: 30px;
      position: absolute;
      top:50%;
      left: 50%;
      margin-top: -250px;
      margin-left: -222px;
      .item{
        margin:20px;
      }
      .title{
        color: #0069d9;
        font-weight: bolder;
        font-size: 28px;
        margin-bottom: 20px;
      }
    }
  }
</style>
