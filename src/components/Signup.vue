<template>
  <div class="signup">
    <el-form  @submit.native.prevent class="signupForm" label="left">
      <el-form-item label="用户名">
        <el-input type="text" auto-complete="off" label="left"
        v-model="userSignup.userName"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input type="text" auto-complete="off" label="left"
        v-model="userSignup.userEmail"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input type="password" auto-complete="off" label="left"
        v-model="userSignup.userPassword">></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="closeSignup">关闭</el-button>
        <el-button @click="signup()" label="left">
          注册
          </el-button>
        
      </el-form-item>
    </el-form>
    <!-- <i class="el-icon-error close" @click="closeLogin"></i> -->
  </div>
</template>

<script>
import AV from 'leancloud-storage'
export default {
  props:['resume'],
  data() {
    return {
      userSignup:{
        userName: '',
        userEmail:'',
        userPassword:''
      },

    }
  },
  methods: {
    closeSignup(){
      this.$router.go(-1)
    },
    signup(){
        // 新建 AVUser 对象实例
      let user = new AV.User();
      console.log(user)
      // 设置用户名
      user.setUsername(this.userSignup.userName);
      // 设置密码
      user.setPassword(this.userSignup.userPassword);
      // 设置邮箱
      user.setEmail(this.userSignup.userEmail);
      console.log(1)
      user.signUp().then((newUser)=> {
        this.$emit('signupsuccess', newUser.toJSON());
        this.closeSignup()
      },(error) =>{
          if(error.code==203){
            alert('这个邮箱已经被注册了')
          }
      });
    },
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
    .signup{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 40px;
    
    .signupForm{
      width: 30em;
      margin: 0 auto;
      border: 1px solid red;
      padding: 20px;
      position: relative;
    }
  }
</style>
