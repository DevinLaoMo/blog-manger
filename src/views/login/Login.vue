<template>
    <div class="main-box">
        <div class="login-content">
            <p class='login-tittle'>登录</p>
            <input class="login-user" type="text" placeholder="Username">
            <input class="login-pwd" type="password" placeholder="Password">
            <button class="login-submit">Login</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  created () {
    this.login()
  },
  methods: {
    login () {
      let params = {
        userId: 'xiaohua',
        passWord: '123456'
      }
      this.$axios.post('/user_personal/login', params).then(data => {
        console.log(data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .main-box{
        width:100%;
        height:100%;
        background:url("../../../static/images/login/login-background.png") center center no-repeat;
        background-size:cover;
        .login-content{
            width:200px;
            height:200px;
            position:absolute;
            top:50%;
            left:50%;
            margin-left:-100px;
            margin-top:-100px;
            display: flex;
            flex-direction: column;
            .login-tittle{
                width:100%;
                text-align:center;
                color:#dbd9d5;
                font-size:14px;
                letter-spacing: 6px;
                // font-family: '';
            }
            .login-user,.login-pwd{
                width:82%;
                height:25px;
                margin:0 auto;
                background:#635554;
                border-radius:2px;
                border:1px solid #bdacaa71;
                opacity: 0.4;
                color:#eee;
                text-indent: 5px;
                font-size:12px;
            }
            input::-webkit-input-placeholder{
                color:#cfcacf;
                text-align: center;
            }
            .login-pwd{
                margin-top:5px;
            }
            .login-submit{
                width:82%;
                height:25px;
                margin:0 auto;
                background:#eee;
                border:none;
                border-radius:2px;
                margin-top:20px;
                color:#77c1a1;
                // font-family: '微软雅黑';
            }
        }
    }
</style>
