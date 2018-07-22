<template>
  <div class="header clearfix">
    <div class="left">
      <a href="#">Resume By muxue</a> |
      <router-link to="/login">
      <a href="#">{{currentuser.userName||'未登录'}}</a>
        </router-link>
    </div>
    <div class="right">
      <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="$emit('getdata')" v-if="!!currentuser.objectId"
      >同步</el-button>
      <el-button type="success" @click="$emit('onClickLogout')" v-if="!!currentuser.objectId"
      >注销</el-button>
      <el-button type="info" @click="$emit('onClickSave')" v-show="!!currentuser.objectId"
      >保存</el-button>
      <el-button type="warning" @click="$emit('previewResume')" >预览</el-button>
</el-row>
    </ul>
    </div>
    
  </div>
</template>

<script>

export default {
  props:['currentuser'],
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
  .clearfix::after{
    content: "";
    display: block;
    clear: both;
  }
  .header{
    padding: 10px 20px;
    background: #fff;
    box-shadow: 0 2px 10px 1px #333;
      .left{
      float: left;
      font-size: 18px;
      line-height: 18px;
      padding-top: 6px;
      a{
      text-decoration: none;
      font-size: 20px;
      color: #666;
      }
      }
    .right{
      float: right;

  }
}
</style>
