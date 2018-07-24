<template>
  <div id="app">
    <top-bar v-show="previewMode===false"
    :currentuser="currentUser"
    @previewResume="previewMode = true" 
    @onClickLogout="logout"
    @onClickSave="save"
    @getdata="getdata()"
    @print="print"
    ></top-bar>
    <main>
      <Edit :resume="resume" v-show="previewMode===false"></Edit>
      <Preview :resume="resume"></Preview>
    </main>
    <el-button type="primary" 
    @click="previewMode = false" class="closePreview" 
    v-show="previewMode===true" size="small"
    >退出预览</el-button>
    <router-view
      @signinsuccess="signinsuccess"
      @signupsuccess="signupsuccess"
    ></router-view>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import Edit from './components/Edit'
import Preview from './components/Preview'
import Login from './components/Login'
import Signup from './components/Signup'
import AV from 'leancloud-storage'

export default {
  name: 'App',
  data(){
    return{
      previewMode: false,
      resume: {
        profile:{
          name:'韩芸汐',
          city:'魔都',
          number:'12345678901',
          age:'18',
          email:'example@example.com',
          gender:'女',
        },
        work:[
          {company: '请输入公司名', time:'',time2:'',content: 'content'}
        ],
        study:[
          {school:'大学名称',duration:'',duration2:'',degree:'学历',work:'在校期间表现优异,担任班长,团支书,积极xxxxxxxxxxx',} 
        ],
        project:[
          {projectName:'项目名称',projectContent:'项目介绍',skills:'技术栈'}
        ],
        phone:{
          weixin:'微信',qq:'qq',github:'github',blog:'博客',zhihu:'知乎',weibo:'微博'
          }
        
      },
      currentUser: {
        userName:'',
        userEmail: '',
        objectId:''
      },
      userSignup:{
        userName:'',
        userEmail: '',
        userPassword:'',
      },
      userLogin:{
        userName:'',
        userEmail: '',
        userPassword:'',
      }
    }
  },
mounted(){
  },
  methods:{
    //获取数据
    getdata(){
      console.log("同步")
        var query = new AV.Query('_User');
        query.get(this.currentUser.objectId).then((user)=> {
          console.log(user.toJSON())
          this.resume = user.toJSON().resume
        }, function (error) {
          // 异常处理
        });
    },
    // 登陆成功
    signinsuccess(user){
      alert(`${user.username}欢迎回来`)
      console.log(user)
      this.currentUser.objectId = user.objectId
      this.currentUser.userEmail = user.email
      this.currentUser.userName = user.username
      console.log("登录成功")
      // this.save()
    },
    // 注册成功
    signupsuccess(user){
      if(!!this.currentUser.objectId){
        console.log(1)
        return 
      }else{
        console.log(2)
        this.currentUser.objectId = user.objectId
        this.currentUser.userEmail = user.email
        this.currentUser.userName = user.username
      }
    },
    
    // 注销
    logout(){
      console.log('注销')
      AV.User.logOut();
      // 现在的 currentUser 是 null 了
      this.currentUser.objectId = ""
      this.currentUser.userEmail = ""
      this.currentUser.userName = ""
      
    },
    // 保存
    save(){
        // 第一个参数是 className，第二个参数是 objectId
        var user = AV.Object.createWithoutData('_User', this.currentUser.objectId);
        // 修改属性
        user.set('resume', this.resume);
        // 保存到云端
        user.save().then(()=>{
          alert('保存成功')
        },(error)=>{
          if(error.code===200){
            alert('未登录,无法保存')
          }
        })  
    },
    print(){
      window.print()
    }
  },
  components:{
    TopBar,
    Edit,
    Preview,
    Login,
    Signup,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}
#app {
  font-family: "Helvetica Neue",Helvetica,
  "PingFang SC","Hiragino Sans GB",
  "Microsoft YaHei","微软雅黑",
  Arial,sans-serif;
  background: url('./assets/1.jpg') no-repeat;
  background-size: cover;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  font-size:12px;
  display: flex;
  flex-direction: column;
}
#app main {
    display:flex;
    flex: 1;
    flex-direction: row;
    animation:5s change linear infinite;
    justify-content: space-around;
    
  }

.closePreview{
  position: fixed;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: white;
}
</style>
