<template>
	<div>
		<h2>教育经历</h2>
		<el-form @submit.native.prevent class="form-wrapper">
			<div class="wrap">
				<el-form-item label="学 校">
					<el-input v-model="study.school" placeholder="请输入学校名称">
					</el-input>
				</el-form-item>
				<el-form-item label="学位">
					<el-input v-model="study.degree" placeholder="请输入学位">
					</el-input>
				</el-form-item>
				<el-form-item label="专业">
					<el-input v-model="study.major" placeholder="请输入专业">
						</el-input>
				</el-form-item>
				<!-- item.duration -->
				<span class="demonstration">学习时间</span>
				<el-date-picker v-model="study.duration" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
				</el-date-picker>
				至
				<el-date-picker v-model="study.duration2" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
				</el-date-picker>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default {
	  props: ["study"]
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
