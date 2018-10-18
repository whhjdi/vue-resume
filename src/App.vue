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
      <!-- <Preview :resume="resume"></Preview> -->
      <Test :resume="resume"></Test>
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
import Test from './components/test'
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
          github:'github.com.whhjdi',
          blog:'wanghandi.top',
          graduate:'2017'
        },
        work:[
          {company: '请输入公司名',job:'前端开发' ,time:'',time2:'',content: 'content'}
        ],
        study:
          {school:'北京大学',duration:'2013',duration2:'2017',degree:'学历',major:'软件工程'} ,
        project:[
          {projectName:'vue简历编辑器（在线版）',code:'',preview:'',skill:'vue',projectContent:'请简单介绍你的项目'}
        ],
        skills:[
          {name:'vue',master:'熟悉',content:[{name:''}]}
        ]
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
      // console.log("同步")
        var query = new AV.Query('_User');
        query.get(this.currentUser.objectId).then((user)=> {
          console.log(user.toJSON())
          this.resume = user.toJSON().resume
          alert('同步云端数据成功,感谢使用muxue简历编辑器')
        }, function (error) {
          // 异常处理
        });
    },
    // 登陆成功
    signinsuccess(user){
      alert(`${user.username}欢迎回来`)
      // console.log(user)
      this.currentUser.objectId = user.objectId
      this.currentUser.userEmail = user.email
      this.currentUser.userName = user.username
      // console.log("登录成功")
      // this.save()
    },
    // 注册成功
    signupsuccess(user){
      if(!!this.currentUser.objectId){
        return 
      }else{
        this.currentUser.objectId = user.objectId
        this.currentUser.userEmail = user.email
        this.currentUser.userName = user.username
      }
    },
    
    // 注销
    logout(){
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
    Test
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
  font-family: "PingFang SC","Helvetica Neue",Helvetica,
  "Hiragino Sans GB","Microsoft YaHei","微软雅黑",
  Arial,sans-serif;
  /* background: url('./assets/1.jpg') no-repeat;
  background-size: cover; */
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  font-size:12px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
#app main {
    display:flex;
    flex: 1;
    flex-direction: row;
    animation:10s change linear infinite;
    justify-content: space-around;
    
  }

.closePreview{
  position: fixed;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: white;
}
@keyframes change {
  0%{
    background: #4389A2;
  }
  25%{
    background: #514A9D;
  }
  50%{
    background: #232526;
  }
  75%{
    background: #514A9D;
  }
  100%{
    background: #4389A2;
  }
}
</style>
