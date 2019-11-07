<template>
  <div class="login-controller">
    <el-row type="flex" justify="center" align="middle" class="login-main-controller">
      <el-col :span="6" class="login-from-controller">
        <el-row type="flex" justify="center" align="middle" class="header-primary">
          <h1>百福云管理系统</h1>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="header-sub">
          <h1>用户登录</h1>
        </el-row>
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="20">
            <el-form :model="formData" :rules="loginFromRules" status-icon ref="verify">
              <el-form-item prop="username">
                <el-input placeholder="请输入用户名"
                  v-model="formData.username"
                  prefix-icon="el-icon-user"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input placeholder="请输入密码"
                  type="password"
                  v-model="formData.password"
                  prefix-icon="el-icon-lock"></el-input>
              </el-form-item>
              <el-form-item>
                <!-- <ValidateCode @callback="validateCodeResult" ref="validateCode"></ValidateCode> -->
              </el-form-item>
              <!--<el-form-item>
                <el-checkbox v-model="remember">记住密码</el-checkbox>
              </el-form-item>-->
              <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="login" :disabled="!validateCode">
                  登录
                </el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle" class="login-copyright-controller">
      <span>Copyright © 2019 百福云 蜀ICP备10205559x号</span>
    </el-row>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import ValidateCode from '@/components/ValidateCode'
@Component({
  components: {
    ValidateCode
  },
})
export default class App extends Vue {}
// export default {
//   name: 'Login',
//   // components: {
//   //   ValidateCode
//   // },
//   data () {
//     return {
//       formData: {
//         username: '',
//         password: ''
//       },
//       // 是否记住密码
//       remember: false,
//       // 验证码
//       validateCode: false,
//       // 表单参数验证
//       loginFromRules: {
//         username: {
//           required: true, message: '请输入账号', trigger: 'blur'
//         },
//         password: {
//           required: true, validator: this.validatePassword, trigger: 'blur'
//         }
//       }
//     }
//   },
//   created () {
//     // 添加回车事件监听器
//     this.enterEventListener()
//   },
//   methods: {
//     /**
//      * 验证密码
//      * @param rule
//      * @param value
//      * @param callback
//      */
//     validatePassword (rule, value, callback) {
//       if (!value) {
//         callback(new Error('请输入密码'))
//       } else {
//         callback()
//       }
//     },
//     /**
//      * 验证码状态处理
//      * @param data
//      */
//     validateCodeResult (data) {
//       this.validateCode = data
//     },
//     /**
//      * 登录
//      */
//     login () {
//       this.$refs.verify.validate((valid) => {
//         if (valid) {
//           // 判断是否透过验证码
//           if (this.validateCode === false) {
//             this.$message({
//               message: '请先拖动滑块完成验证',
//               type: 'warning',
//               duration: 2000
//             })
//             return false
//           }
//           // 把验证码修改为false
//           this.validateCode = false
//           // 重置验证码状态
//           // this.$refs.validateCode.reload();
//           // 调用登录API
//           let header = { 'Content-Type': 'application/x-www-form-urlencoded' }
//           this.$post('/auth/login', this.formData, header).then(result => {
//             if (result.code === 200) {
//               // 存储登录信息
//               this.$store.commit('setLogin', result.data)
//               // 存储权限目录
//               this.$store.commit('setAuthMenu', result.data.menuPos)
//               // 跳转到首页
//               this.$router.push({ path: '/' })
//             }
//           })
//         } else {
//           return false
//         }
//       })
//     },

//     /**
//      * 记住密码
//      */
//     rememberPassword () {
//       if (this.remember) { // 记住账户密码
//         localStorage.setItem('username', this.formData.username)
//         localStorage.setItem('password', this.formData.password)
//       } else { // 删除记住的账户密码
//         localStorage.removeItem('username')
//         localStorage.removeItem('password')
//       }
//     },
//     /**
//      * 回车事件监听
//      */
//     enterEventListener () {
//       document.onkeydown = e => {
//         var theEvent = window.event || e
//         var code = theEvent.keyCode || theEvent.which || theEvent.charCode
//         if (code === 13) {
//           this.login()
//         }
//       }
//     }
//   }
// }
</script>

<style lang="scss">
  .login-controller {
      @extend .controller-w-h;
      background-image: url("../../../assets/image/login/bg.jpg");
      background-size: 100% 100%;
      color: $color-white;
      .login-main-controller {
          height: calc(100% - 40px);
          .login-from-controller {
              background-color: $color-white;
              height: 400px;
              border-radius: 5px;
              .header-primary {
                  color: $color-primary;
                  font-size: $font-extra-large-size;
                  margin: 20px 0px;
              }
              .header-sub {
                  color: $color-black;
                  font-size: $font-medium-size;
                  margin-bottom: 20px;
              }
          }
      }
      .login-copyright-controller {
          display: flex;
          justify-content: center;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.2);
      }
  }
</style>
