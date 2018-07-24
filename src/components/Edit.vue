<template>
  <div class="edit">
      <aside>
        <ol>
          <li v-for="(icon,index) in icons" :key="icon" 
            :class="{'active':currentTab===index}"
            @click="currentTab=index"
          >
            <svg class="icon">
                <use :xlink:href="`#icon-el-${icon}`"></use>
            </svg>
          </li>
        </ol>
      </aside>
      <div class="main">
        <ol>
          <li>
            <ProfileEdit v-show="currentTab===0" :profile="resume.profile"></ProfileEdit>
          </li>
          <li>
            <StudyEdit v-show="currentTab===1" :study="resume.study"></StudyEdit>
          </li>
          <li>
            <ProjectEdit v-show="currentTab===2" :project="resume.project"></ProjectEdit>
          </li>
          <li>
            <WorksEdit v-show="currentTab===3" :work="resume.work"></WorksEdit>
          </li>
          <li>
            <PhoneEdit v-show="currentTab===4" :phone="resume.phone"></PhoneEdit>
          </li>
        </ol>
      </div>
  </div>
</template>

<script>
import ProfileEdit from './ProfileEdit'
import WorksEdit from './WorksEdit'
import StudyEdit from './StudyEdit'
import ProjectEdit from './ProjectEdit'
import PhoneEdit from './PhoneEdit'

export default {
  props:['resume'],
  name: 'Edit',
  data() {
    return {
      icons:['meh','books','xiangmu1','woorks','phone'],
      currentTab: 0,
    }
  },
  methods: {

  },
  components: {
    ProfileEdit,
    WorksEdit,
    StudyEdit,
    ProjectEdit,
    PhoneEdit,
  }
}
</script>

<style lang="scss" scoped>
    
  .edit{
    min-width: 600px;
    background: #fff;
    margin: 20px;
    border-radius : 10px;
    display: flex;
    flex-direction: row;
    
    >aside{
      width: 80px;
      height: 100%;
      border-radius: 8px 0 0 8px;
      background: rgb(32, 31, 48);
      ol{
        li{
          list-style: none;
          color: white;
          cursor: pointer;
          margin: 0 0px 40px 5px;
          padding: 16px 0;
          .icon{
            width: 3em;
            height: 3em;
            fill: white;
          }
          &.active{
            background: #fff;
            .icon{
              fill:#000;
            }
          }
        }
      }
    }
    .main{
      flex-grow: 1;
      margin: 0 auto;
      overflow: auto;
      ol{
          padding :20px;
        li{
          text-align: left;
          list-style: none;
        }
      }
    }
  }
  @media print{
      .edit{
        display: none;
      }
    }
</style>
