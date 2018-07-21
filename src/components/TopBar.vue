<template>
  <div class="header clearfix">
    <div class="left">
      <a href="#">Resume By muxue</a> 
    </div>
    <div class="right">
      
      <ul class="clearfix">
      <li>保存</li>
      <li>登录</li>
      <li>注册</li>
      <li @click="$emit('previewResume')">预览</li>
    </ul>
    </div>
    
  </div>
</template>

<script>
export default {
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
      ul>li{
        float: left;
        list-style: none;
        margin-left: 10px;
        border: 1px solid #2c3e50;
        padding: 5px 10px;
        cursor: pointer;
        transition:background-color 0.3s ease-in-out;
        &:hover{
          background: #2c3e50;
          color: aliceblue;
        }
      }
  }
}
</style>
