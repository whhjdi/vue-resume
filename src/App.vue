<template>
  <div id="app">
    <top-bar @previewResume="previewMode = true" v-show="previewMode===false"></top-bar>
    <main>
      <Edit :resume="resume" v-show="previewMode===false"></Edit>
      <Preview :resume="resume"></Preview>
    </main>
    <div @click="previewMode = false" class="closePreview" v-show="previewMode===true">退出预览</div>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import Edit from './components/Edit'
import Preview from './components/Preview'
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
        
      }
    }
  },
  methods:{

  },
  components:{
    TopBar,
    Edit,
    Preview,
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  border: 1px solid #2c3e50;
  padding: 5px 10px;
  cursor: pointer;
  transition:background-color 0.3s ease-in-out;
  background: #e6666e;
  color: white;
}
  .closePreview:hover{
      background: #000;
      color: aliceblue;
    }
</style>
