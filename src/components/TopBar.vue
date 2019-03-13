<template>
	<div class="header clearfix">
		<div class="left">
			<a href="#">Resume By muxue</a> |
			<el-tooltip class="item" effect="dark" content="点击登录或注册" placement="right">
				<el-button size="small">
					<router-link to="/login">
						<a href="#">{{currentuser.userName||'点击登录'}}</a>
						<i class="el-icon-more el-icon--right"></i>
					</router-link>
				</el-button>
			</el-tooltip>
		</div>
		<div class="right">
			<el-row>
				<el-button type="success" @click="$emit('getdata')" v-if="!!currentuser.objectId" size="small">
					同步
					<i class="el-icon-download el-icon--right"></i>
				</el-button>
				<el-button
					type="info"
					@click="$emit('onClickLogout')"
					v-if="!!currentuser.objectId"
					size="small"
				>
					注销
					<i class="el-icon-caret-right el-icon--right"></i>
				</el-button>
				<el-button
					type="primary"
					@click="$emit('onClickSave')"
					v-show="!!currentuser.objectId"
					size="small"
				>
					保存
					<i class="el-icon-check el-icon--right"></i>
				</el-button>
				<!-- <el-button  @click="$emit('changeTheme')" type="warning" size="small"
        >换肤
        <i class="el-icon-printer el-icon--right"></i>
				</el-button>-->
				<el-button @click="$emit('print')" type="warning" size="small">
					打印
					<i class="el-icon-printer el-icon--right"></i>
				</el-button>
				<el-button @click="$emit('previewResume')" type="danger" size="small">
					预览
					<i class="el-icon-view el-icon--right"></i>
				</el-button>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["currentuser"],
		data() {
			return {};
		},
		methods: {},
		components: {}
	};
</script>

<style lang="scss" scoped>
	.clearfix::after {
		content: "";
		display: block;
		clear: both;
	}
	.header {
		padding: 10px 20px;
		background: #fff;
		box-shadow: 0 2px 10px 1px #333;
		.left {
			float: left;
			font-size: 18px;
			line-height: 18px;
			color: #303133;
			a {
				text-decoration: none;
				font-size: 20px;
				color: #409eff;
			}
			.item {
				border: none;
			}
		}
		.right {
			float: right;
			font-size: 16px;
			line-height: 16px;
			margin-top: 3px;
		}
	}
	@media print {
		.header {
			display: none;
		}
	}
</style>
