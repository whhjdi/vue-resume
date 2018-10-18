<template>
  <div>
    <h2>个人项目</h2>
    <el-form @submit.native.prevent class="form-wrapper">
      <div class="wrap" v-for="(item,index) in project" :key="index">
        <el-form-item label="项目名称">
          <el-input v-model="item.projectName" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item label="源码地址（可选）">
          <el-input v-model="item.code" placeholder="源码地址（可选）"></el-input>
        </el-form-item>
        <el-form-item label="预览地址（可选）">
          <el-input v-model="item.preview" placeholder="预览地址（可选）"></el-input>
        </el-form-item>
        <el-form-item label="主要技术">
          <el-input placeholder="使用的技术" v-model="item.skill">
          </el-input>
        </el-form-item>
        <el-form-item label="项目内容">
          <el-input type="textarea" :rows="6" placeholder="请简单介绍你的项目" v-model="item.projectContent">
          </el-input>
        </el-form-item>

        <i class="el-icon-error close" @click="removeProject(index)"></i>
      </div>
      <el-button class="addbtn" type="primary" @click="addProject">添加</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ["project"],
    data() {
      return {};
    },
    methods: {
      addProject() {
        this.project.push({ projectName: "", projectContent: "" });
      },
      removeProject(index) {
        this.project.splice(index, 1);
      }
    },
    components: {}
  };
</script>

<style lang="scss" scoped>
  .form-wrapper {
    margin: 24px 0;
    padding: 4px;
    position: relative;
    border-radius: 5px;
    .wrap {
      position: relative;
      .close {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
</style>
