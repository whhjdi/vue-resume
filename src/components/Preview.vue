<template>
  <div class="preview">
      <div class="wrapper">
        <section class="profile">
            <h2>{{resume.profile.name}}</h2>
            <div class="profileWrapper">
                {{resume.profile.age}}
                    |
                {{resume.profile.city}}
                    |
                {{resume.profile.gender}}
                    |
                {{resume.profile.number}}
                    |
                {{resume.profile.email}}
            </div>
                

        </section>
        <section class="study" v-show="resume.study">
            <h3>教育背景</h3>
            <div class="studyWrapper" v-for="(list,index) in resume.study" :key="index">
                <div class="studyContent">
                    {{list.school}}
                    {{list.degree}}
                    <span v-show="!!list.duration&&list.duration2">
                        {{list.duration}}------{{list.duration2}}
                    </span>
                        
                </div>
            </div>
            
            
        </section>
        <section class="project">
            <h3>个人项目</h3>
            <div class="projectWrapper" v-for="(list,index) in resume.project" :key="index">
                {{list.projectName}}
                {{list.projectContent}}
                {{list.skills}}
            </div>
        </section>
        <section class="work">
            <h3>工作经历</h3>
            <div class="workWrapper" v-for="(list,index) in resume.work" :key="index">
                {{list.company}}
                <span v-show="!!list.time&&list.time2">
                {{list.time}}------{{list.time2}}
                </span>
                {{list.content}}
            </div>
        </section>
        <section class="phone">
            <h3>联系方式</h3>
            <div class="phoneWrapper">
                {{resume.phone.weixin}}
                {{resume.phone.github}}
                {{resume.phone.blog}}
                {{resume.phone.weibo}}
                {{resume.phone.zhihu}}
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
        .wrapper{
            text-align: left;
            padding: 40px 40px 0 40px;
            color: #666666;
            .profileWrapper{
                margin: 10px 0;
                padding: 10px 0;
                border-bottom: 3px solid #5974d4;
                font-size: 18px;
            }
            .studyWrapper{
                margin: 10px 0;
            }
            .projectWrapper{
                margin: 10px 0
            }
            .workWrapper{
                margin: 10px 0
            }
            .phoneWrapper{
                margin: 10px 0
            }
        }
    }
</style>

