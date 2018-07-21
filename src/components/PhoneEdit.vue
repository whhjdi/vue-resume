<template>
  	<div>
		<h2>联系方式</h2>
		<el-form @submit.native.prevent class="form-wrapper">
			<el-form-item label="微信">
				<el-input v-model="phone.weixin" placeholder="weixin"></el-input>
			</el-form-item>

			<el-form-item label="qq">
				<el-input v-model="phone.qq" placeholder="QQ"></el-input>
			</el-form-item>

			<el-form-item label="github">
				<el-input v-model="phone.github" placeholder="github"></el-input>
			</el-form-item>
			<el-form-item label="博客">
				<el-input v-model="phone.blog" placeholder="blog"></el-input>
			</el-form-item>	
      <el-form-item label="知乎">
				<el-input v-model="phone.zhihu" placeholder="知乎"></el-input>
			</el-form-item>
      <el-form-item label="微博">
				<el-input v-model="phone.weibo" placeholder="微博"></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
  props:['phone'],
  data() {
    return {

    }
  },
  created(){
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .form-wrapper {
    margin: 24px 0;
    padding: 4px;
    position: relative;
    border-radius: 5px;

  }
</style>
