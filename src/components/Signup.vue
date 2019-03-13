<template>
	<div class="signup">
		<vue-particles
			color="#fff"
			:particleOpacity="1.0"
			:particlesNumber="100"
			shapeType="circle"
			:particleSize="4"
			linesColor="#fff"
			:linesWidth="1"
			:lineLinked="true"
			:lineOpacity="0.8"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="repulse"
			class="lizi"
		></vue-particles>
		<el-form
			:model="userSignup"
			status-icon
			:rules="rules2"
			ref="userSignup"
			@submit.native.prevent
			class="signupForm"
		>
			<div class="title">
				<i>Resume By muxue</i>
			</div>
			<div>感谢有你</div>
			<el-form-item label="用户名" class="item" prop="userName">
				<el-input
					type="text"
					auto-complete="off"
					label="left"
					v-model="userSignup.userName"
					size="small"
					placeholder="请输入用户名"
				></el-input>
			</el-form-item>
			<el-form-item label="邮箱" class="item" prop="userEmail">
				<el-input
					type="text"
					auto-complete="off"
					label="left"
					v-model="userSignup.userEmail"
					size="small"
					placeholder="请输入邮箱"
				></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="userPassword" class="item">
				<el-input
					type="password"
					v-model="userSignup.userPassword"
					auto-complete="off"
					size="small"
					placeholder="请输入密码"
				></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="userCheck" class="item">
				<el-input
					type="password"
					v-model="userSignup.userCheck"
					auto-complete="off"
					size="small"
					placeholder="请确认密码"
				></el-input>
			</el-form-item>
			<el-form-item class="button">
				<el-button @click="closeSignup()" type="danger">关闭</el-button>
				<el-button @click="submitForm('userSignup')" label="left" type="primary">注册</el-button>
			</el-form-item>
			<el-form-item class="item">已有账号?
				<router-link to="/login">登录</router-link>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import AV from "leancloud-storage";
	export default {
		props: ["resume"],
		data() {
			var validatePass1 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入用户名"));
				} else {
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
				if (value === "") {
					callback(new Error("请输入邮箱"));
				}
				setTimeout(() => {
					if (mailReg.test(value)) {
						callback();
					} else {
						callback(new Error("请输入正确的邮箱格式"));
					}
				}, 100);
			};
			var validatePass3 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				} else {
					callback();
				}
			};
			var validatePass4 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if (value !== this.userSignup.userPassword) {
					callback(new Error("两次输入密码不一致!"));
				} else {
					callback();
				}
			};
			return {
				userSignup: {
					userCheck: "",
					userName: "",
					userEmail: "",
					userPassword: "",
					userCheck: ""
				},
				rules2: {
					userPassword: [{ validator: validatePass3, trigger: "blur" }],
					userCheck: [{ validator: validatePass4, trigger: "blur" }],
					userName: [{ validator: validatePass1, trigger: "blur" }],
					userEmail: [{ validator: validatePass2, trigger: "blur" }]
				},
				buttonDisable: false
				// return {
				//   userSignup:{
				//     userName: '',
				//     userEmail:'',
				//     userPassword:''
				//   },
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						this.signup();
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			closeSignup() {
				this.$router.replace("/");
			},
			signup() {
				// 新建 AVUser 对象实例
				let user = new AV.User();
				// 设置用户名
				user.setUsername(this.userSignup.userName);
				// 设置密码
				user.setPassword(this.userSignup.userPassword);
				// 设置邮箱
				user.setEmail(this.userSignup.userEmail);
				user.signUp().then(
					newUser => {
						this.$emit("signupsuccess", newUser.toJSON());
						this.closeSignup();
					},
					error => {
						if (error.code === 203) {
							alert("这个邮箱已经被注册了");
						} else if (error.code === 125) {
							alert("请输入正确的邮箱");
						}
					}
				);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.signup {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
		font-size: 16px;
		.lizi {
			height: 100%;
			background: #f78989;
		}
		.signupForm {
			width: 25em;
			height: 35em;
			background: #fff;
			padding: 30px;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -250px;
			margin-left: -222px;
			.item {
				margin: 5px;
			}
			.button {
				margin-top: 20px;
				margin-bottom: 10px;
			}
			.title {
				color: #0069d9;
				font-weight: bolder;
				font-size: 28px;
				margin-bottom: 10px;
			}
		}
	}
</style>
