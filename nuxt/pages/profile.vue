<template>
<div class="grid grid-cols-3 gap-5">
  <div class="card text-center shadow-2xl bg-base-100">
    <figure class="px-10 pt-10">
      <div class="flex justify-center avatar">
        <div class="mb-8 rounded-full w-1/2">
          <img :src="'https://ui-avatars.com/api/?name='+ $auth.user.first_name + '+' + $auth.user.last_name + '&background=000000&color=FFFFFF'">
        </div>
      </div>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ $auth.user.last_name + ' ' + $auth.user.first_name }}</h2>
      <p>{{ $auth.user.email }}</p>
      <div class="justify-center card-actions">
        <button class="btn btn-outline btn-accent">More info</button>
      </div>
    </div>
  </div>
  <div class="col-span-2 card shadow-2xl bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Đổi mật khẩu</h2>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Mật khẩu cũ</span>
        </label>
        <input type="password" placeholder="Mật khẩu cũ" value="**********" class="input input-accent input-sm input-bordered">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Mật khẩu mới</span>
        </label>
        <input type="password" placeholder="Mật khẩu mới" class="input input-accent input-sm input-bordered">
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Nhập lại mật khẩu mới</span>
        </label>
        <input type="password" placeholder="Nhập lại mật khẩu mới" class="input input-accent input-sm input-bordered">
      </div>
      <div class="justify-end card-actions">
        <button class="btn btn-sm btn-accent px-5">Lưu</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
