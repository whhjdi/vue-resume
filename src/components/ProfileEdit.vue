<template>
  <div class="profile">
    <h2>个人简介</h2>
    <el-form   @submit.native.prevent class="form-wrapper">
      <el-form-item label="姓 名">
				<el-input v-model="profile.name" placeholder="你的姓名"></el-input>
			</el-form-item>
			<el-form-item label="城 市">
				<el-input v-model="profile.city" placeholder="你所在的城市"></el-input>
			</el-form-item>
			<el-form-item label="性 别">
				<el-input v-model="profile.gender" placeholder="性别"></el-input>
			</el-form-item>
			<el-form-item label="年 龄">
				<el-input v-model="profile.age" placeholder="年龄"></el-input>
			</el-form-item>
      <el-form-item label="电话">
				<el-input v-model="profile.number" placeholder="number"></el-input>
			</el-form-item>
      <el-form-item label="邮件">
				<el-input v-model="profile.email" placeholder="email"></el-input>
			</el-form-item>
    </el-form>

  </div>
</template>

<script>

export default {
  props:['profile'],
  name: 'Profile',
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
.profile{
  .form-wrapper{
    margin:24px 0;
    padding:4px;
    position:relative;
    border-radius:5px;
  }
}
</style>
