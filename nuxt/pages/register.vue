<template>
  <div class="card text-center bg-base-100 max-w-md mx-auto shadow-2xl mt-10">
    <div class="card-body">
      <h2 class="card-title">Tạo tài khoản
      </h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="text" v-model="form.email" placeholder="Email" class="input input-accent input-bordered">
        <label class="label flex flex-col justify-start items-start" v-if="errors.email.length">
          <span class="label-text-alt text-error" v-for="(err, index) in errors.email" :key="index">{{err}}</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Tên</span>
        </label>
        <input type="text" v-model="form.name" placeholder="Tên" class="input input-accent input-bordered">
        <label class="label flex flex-col justify-start items-start" v-if="errors.name.length">
          <span class="label-text-alt text-error" v-for="(err, index) in errors.name" :key="index">{{err}}</span>
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
          <span class="label-text">Nhập lại mật khẩu</span>
        </label>
        <input type="password" v-model="form.password_confirmation" placeholder="Nhập lại mật khẩu" class="input input-accent input-bordered">
        <label class="label flex flex-col justify-start items-start" v-if="errors.password_confirmation.length">
          <span class="label-text-alt text-error" v-for="(err, index) in errors.password_confirmation" :key="index">{{err}}</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <NuxtLink to="/login" class="label-text-alt">
            Đã có tài khoản ?
          </NuxtLink>
        </label>
        <button class="btn btn-ghost mt-3 hover:bg-accent hover:text-base-100" @click="register">Đăng ký</button>
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
        password_confirmation: [],
        name: [],
      },
      form: {
        email: '',
        name: '',
        password: '',
        password_confirmation : '',
      },
    }
  },
  methods: {

    async register () {
       // this is managed automatically in the background
      // await this.$axios.$get('/sanctum/csrf-cookie')
      try {
        await this.$axios.$post('/api/auth/register', this.form)
        this.$router.push('/');
      } catch (err) {
        let errors = err.response.data.errors;
        if (err.response.status == 422) {
          this.errors.email = errors.email !== undefined ? errors.email : [];
          this.errors.password = errors.password !== undefined ? errors.password : [];
          this.errors.password_confirmation = errors.password_confirmation !== undefined ? errors.password_confirmation : [];
          this.errors.name = errors.name !== undefined ? errors.name : [];
        }

        console.log(err.response)
      }
    }
  },
  computed: {

  }
}
</script>
