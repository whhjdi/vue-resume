<template>
  <div class="preview">
      <div class="wrapper">
        <section class="profile">
            <h2>{{resume.profile.name}}</h2>
            <div class="profileWrapper">
                年龄:{{resume.profile.age}}
                    |
                城市:{{resume.profile.city}}
                    |
                性别:{{resume.profile.gender}}
                    |
                手机:{{resume.profile.number}}
                    |
                邮箱:{{resume.profile.email}}
            </div>
                

        </section>
        <section class="study" v-show="resume.study">
            <h3>教育背景</h3>
            <div class="studyWrapper" v-for="(list,index) in resume.study" :key="index">
                <div class="studyContent">
                    <div class="schoolWrapper">
                    <span class="school">
                        {{list.school}}
                    </span>
                    <span class="school">
                     {{list.degree}}
                    </span>
                    <span class="school"  v-show="!!list.duration&&list.duration2">{{list.duration}}------{{list.duration2}}</span>
                    <span v-show="!!list.duration&&list.duration2"></span>
                    </div>
                    <div class="schoolWork">{{list.work}}</div>   
                </div>
            </div>
            
            
        </section>
        <section class="project">
            <h3>个人项目</h3>
            <div class="projectWrapper" v-for="(list,index) in resume.project" :key="index">
                <h4>{{list.projectName}}</h4>
                <div class="projectDescription">
                    项目介绍
                    <div class="projectContent">
                    {{list.projectContent}}
                    </div>    
                </div>
                
                <div class="projectSkills">
                    技术栈
                    <div class="projectSkill">
                        {{list.skills}}
                    </div>  
                </div>
            </div>
        </section>
        <section class="work">
            <h3>工作经历</h3>
            <div class="workWrapper" v-for="(list,index) in resume.work" :key="index">
                <div class="workCompany">
                    <span>{{list.company}}</span> 
                    <span v-show="!!list.time&&list.time2" class="workTime">
                    {{list.time}}------{{list.time2}}
                    </span>
                </div>
                <div class="workContent">
                    工作内容
                    <div class="content">
                        {{list.content}}
                    </div>
                </div>
                
            </div>
        </section>
        <section class="phone">
            <h3>联系方式</h3>
            <div class="phoneWrapper">
                <div class="item">
                <svg class="icon">
                    <use xlink:href="#icon-el-z-weixin2"></use>
                </svg>---{{resume.phone.weixin}}
                </div>
                <div class="item">
                <svg class="icon">
                    <use xlink:href="#icon-el-github"></use>
                </svg>---{{resume.phone.github}}</div>
                <div class="item">
                <svg class="icon">
                    <use xlink:href="#icon-el-Blog"></use>
                </svg>---{{resume.phone.blog}}</div>
                <div class="item">
                <svg class="icon">
                    <use xlink:href="#icon-el-weibo"></use>
                </svg>---{{resume.phone.weibo}}</div>
                <div class="item">
                <svg class="icon">
                    <use xlink:href="#icon-el-zhihu0"></use>
                </svg>---{{resume.phone.zhihu}}</div>
            </div>
        </section>
      </div>
  </div>
</template>

<script>
export default {
    props:['resume'],
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
    h3{
        color: #5974d4;
    }
    .preview{
        max-width: 980px;
        flex: 1;
        background: #fff;
        margin: 20px 20px 20px 0;
        border-radius: 10px;
        font-size: 20px;
        overflow: auto;
        .wrapper{
            text-align: left;
            padding: 40px 40px 0 40px;
            color: #666666;
            
            section{
                margin-bottom: 20px;
            }
            .profileWrapper{
                margin: 10px 0;
                padding: 10px 0;
                border-bottom: 3px solid #5974d4;
                font-size: 18px;
            }
            .studyWrapper{
                margin: 10px 0;
                .studyContent{
                    .schoolWrapper{
                        margin-bottom: 15px;
                        .school{
                            text-align: left;
                            margin-right: 60px;
                        }
                    }
                    .schoolWork{
                        font-size: 18px;
                        margin-left: 1em;
                    }
                }
            }
            .projectWrapper{
                border-bottom: 1px solid #666;
                padding-bottom: 20px;
                margin: 20px 0;
                .projectDescription{
                    margin-top: 15px;
                    margin-bottom:15px;
                    margin-left: 1em;
                    >.projectContent{
                        margin-left: 2em;
                        font-size: 18px;
                    }
                }
                .projectSkills{
                    margin-left: 1em;
                    >.projectSkill{
                        margin-left: 2em;
                    }
                }

            }
            .workWrapper{
                margin: 10px 0;
                border-bottom: 1px solid #666;
                padding-bottom: 20px;
                .workCompany{
                    margin-top:15px;
                    margin-bottom:15px;
                    >.workTime{
                        margin-left: 130px;
                    }
                }
                .workContent{
                    >.content{
                        margin-left: 2em;
                        font-size: 18px;
                    }
                }
            }
            .phoneWrapper{
                margin: 10px  0 0 1em;
                >.item{
                    margin-bottom: 8px;
                }
            }
        }
    }
</style>

