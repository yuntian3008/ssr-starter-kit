<template>
  <div class="card text-center bg-base-100 max-w-md mx-auto shadow-2xl mt-10">
    <div class="card-body">
      <h2 class="card-title">Đăng nhập
      </h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="text" v-model="form.username" placeholder="Email" class="input input-accent input-bordered">
        <label class="label flex flex-col justify-start items-start" v-if="errors.email.length">
          <span class="label-text-alt text-error" v-for="(err, index) in errors.email" :key="index">{{err}}</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Mật khẩu</span>
        </label>
        <input type="password" v-model="form.password" placeholder="Mật khẩu" class="input input-accent input-bordered">
        <label class="label flex flex-col justify-start items-start" v-if="errors.password.length">
          <span class="label-text-alt text-error" v-for="(err, index) in errors.password" :key="index">{{err}}</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <a href="#" class="label-text-alt">
            Quên mật khẩu ?
          </a>
          <NuxtLink to="/register" class="label-text-alt">
            Tạo tài khoản
          </NuxtLink>
        </label>
        <button class="btn btn-ghost mt-3 hover:bg-accent hover:text-base-100" @click="login">Đăng nhập</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  layout: 'blank',
  data () {
    return {
      errors: {
        email: [],
        password: [],
      },
      form: {
        username: '',
        password: '',
        grant_type: 'password',
        client_id: process.env.passportPasswordGrantId,
        client_secret: process.env.passportPasswordGrantSecret,
        scope: '',
      },
    }
  },
  methods: {

    resetError() {
      this.errors = {
        email: [],
        password: [],
      };
    },

    validate() {

      if (!this.form.username) { this.errors.email = ['Vui lòng điền Email của bạn']; return false}

      if (!this.form.username.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        { this.errors.email = ['Email không đúng định dạng']; return false}

      if (!this.form.password) { this.errors.password = ['Vui lòng điền mật khẩu của bạn']; return false}

      return true;
    },

    async login () {
      this.resetError()
      if (!this.validate()) return;
      try {
        await this.$auth.loginWith('password_grant', {
          data: this.form
        })
      } catch (err) {
        this.errors.email = ['Đăng nhập thất bại. Email hoặc mật khẩu không chính xác.']
        //console.log(err.response)
      }
    }
  },
  computed: {

  }
}
</script>
