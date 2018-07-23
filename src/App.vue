<template>
  <div id="app">
    <top-bar v-show="previewMode===false"
    :currentuser="currentUser"
    @previewResume="previewMode = true" 
    @onClickLogout="logout"
    @onClickSave="save"
    @getdata="getdata()"
    ></top-bar>
    <main>
      
      
      <Edit :resume="resume" v-show="previewMode===false"></Edit>
      <Preview :resume="resume"></Preview>

    </main>
    <el-button type="danger" 
    @click="previewMode = false" class="closePreview" v-show="previewMode===true"
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
          name:'muxue',
          city:'北京',
          number:'12345678901',
          age:'18',
          email:'example@example.com',
          gender:'男',
        },
        work:[
          {company: '', time:'',time2:'',content: ''}
        ],
        study:[
          {school:'北京大学',duration:'',duration2:'',degree:'本科'} 
        ],
        project:[
          {projectName:'',projectContent:'',skills:''}
        ],
        phone:{
          weixin:'1',qq:'2',github:'3',blog:'4',zhihu:'5',weibo:'6'
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

  text-align: center;
  color: #2c3e50;
  height: 100vh;
  font-size:12px;
  display: flex;
  flex-direction: column;
  box-shadow:0 0 3px hsla(0,0,0,0.5);
}
#app main {
    display:flex;
    flex: 1;
    flex-direction: row;
    animation:5s change linear infinite;
    justify-content: space-around;
    
  }

@keyframes change{
  0%{
    background:#00264a;
  }
  25%{
    background:#013f79;
  }
  50%{
    background: #01529e;
  }
  80%{
    background:#013f79;
  }
  100%{
    background:#00264a;
  }
}
.closePreview{
  position: fixed;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: white;
}
</style>
