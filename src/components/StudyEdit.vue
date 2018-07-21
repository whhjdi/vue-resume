<template>
  <div>
		<h2>教育经历</h2>
		<el-form @submit.native.prevent class="form-wrapper">
			<div class="wrap" v-for="(item,index) in study" :key="index">
				<el-form-item label="学 校">
					<el-input v-model="item.school" placeholder="请输入学校名称">					
					</el-input>
				</el-form-item>
				<el-form-item label="学位">
					<el-input v-model="item.degree" placeholder="请输入学位">					
					</el-input>
				</el-form-item>
				<!-- item.duration -->
				<span class="demonstration">学习时间</span>
				<el-date-picker
			      v-model="item.duration"
			      type="date"
			      placeholder="选择日期"
			      format="yyyy 年 MM 月 dd 日"
			      value-format="yyyy-MM-dd">
			    </el-date-picker>
			    至
			    <el-date-picker
			      v-model="item.duration2"
			      type="date"
			      placeholder="选择日期"
			      format="yyyy 年 MM 月 dd 日"
			      value-format="yyyy-MM-dd">
			    </el-date-picker>
          <el-form-item label="其他经历">
					<el-input v-model="item.degree" placeholder="请输入获奖以及其他校园经历">					
					</el-input>
				</el-form-item>
        
				<i class="el-icon-error close" v-on:click="removeItem(index)"></i>
			</div>
			<el-button class="addbtn" type="primary" v-on:click="addItem">添加</el-button>	
		</el-form>
	</div>
</template>

<script>
export default {
  props:['study'],
  data() {
    return {

    }
  },
  methods: {
    addItem(){
      this.study.push(
        {school:'',duration:'',duration2:'',degree:''} 
      )
    },
    removeItem(index){
      this.study.splice(index,1)
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
