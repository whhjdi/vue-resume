<template>
  <div>
    <h2>个人技能</h2>
    <el-form @submit.native.prevent class="form-wrapper">
      <div class="wrap" v-for="(list,index) in skills" :key="index">
        <el-form-item label="技术名称">
          <el-input v-model="list.name" placeholder="技术名称比如vue"></el-input>
        </el-form-item>
        <el-form-item label="熟悉程度">
          <el-input v-model="list.master" placeholder="比如熟悉，掌握"></el-input>
        </el-form-item>
        <div v-for="(item,ind) in list.content" :key="ind">
          <el-form-item label="内容">
            <i class="el-icon-error close" 
            @click="removeItem(ind,list)"
            v-show="list.content.length > 1"></i>
            <el-input v-model="item.name" placeholder="内容"></el-input>
            <el-button class="addbtn" type="info" size="small" @click="addItem(list)">添加列表</el-button>
          </el-form-item>
        </div>
        <i class="el-icon-error close" @click="removeProject(index)"></i>
      </div>
      <el-button class="addbtn" type="primary" @click="addProject">添加</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: ["skills"],
    data() {
      return {};
    },
    methods: {
      addProject() {
        this.skills.push({
          name: "vue",
          master: "熟悉",
          content: [{ name: "" }]
        });
      },
      removeProject(index) {
        this.skills.splice(index, 1);
      },
      addItem(list) {
        list.content.push({ name: "" });
      },
      removeItem(index, list) {
          list.content.splice(index, 1);
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
