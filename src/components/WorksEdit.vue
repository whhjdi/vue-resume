<template>
  <div class="work">
    <h2>工作经历</h2>
		<el-form @submit.native.prevent class="form-wrapper">
			<div class="wrap" v-for="(list,index) in work" :key="index" >
				<el-form-item label="公 司">
					<el-input v-model="list.company" placeholder="请输入公司名称"></el-input>
				</el-form-item>
        <el-form-item label="岗位">
					<el-input v-model="list.job" placeholder="请输入工作岗位"></el-input>
				</el-form-item>
				<span class="demonstration">工作时间</span>
			    <el-date-picker
			      v-model="list.time"
			      type="date"
			      placeholder="选择日期"
			      format="yyyy 年 MM 月 dd 日"
			      value-format="yyyy-MM-dd">
			    </el-date-picker>
			    至
			    <el-date-picker
			      v-model="list.time2"
			      type="date"
			      placeholder="选择日期"
			      format="yyyy 年 MM 月 dd 日"
			      value-format="yyyy-MM-dd">
			    </el-date-picker>

				<el-form-item label="工作内容">
					<el-input
					  type="textarea"
					  :rows="6"
					  placeholder="请输入内容"
					  v-model="list.content">
					</el-input>
				</el-form-item>
					<i class="el-icon-error close" v-on:click="removeWork(index)"></i>
			</div>
			<el-button class="addbtn" type="primary" v-on:click="addWork">添加</el-button>	
		</el-form>
  </div>
</template>

<script>
export default {
  props:['work'],
  data() {
    return {

    }
  },
  methods: {
    addWork(){
      this.work.push(
        {company: '', time:'',time2:'',content: ''}
      )
    },
    removeWork(index){
      this.work.splice(index,1)
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.form-wrapper{
    margin:24px 0;
    padding:4px;
    position:relative;
    border-radius:5px;
    .wrap{
    position: relative;
    .close{
      position: absolute;
      top:0;
      right:0;
    }
    }
  }
  
  
</style>
