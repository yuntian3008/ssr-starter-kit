<template>
   <div class="dropdown dropdown-end">
    <div tabindex="2" class="m-1 btn btn-sm btn-ghost">Chủ đề: {{ key }}</div>
      <ul tabindex="2" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-base-content">
        <li v-for="(theme, index) in themes" :key="index">
          <a :data-set-theme="theme" :class="'capitalize ' + (theme == key ? 'bg-accent text-base-100' : 'hover:bg-accent hover:text-base-100')" @click="changeTheme(theme)">{{ theme }}</a>
        </li>
      </ul>
    </div>
  <!-- <select
   v-model="key"
   class="select select-bordered text-base-content select-sm"
   data-choose-theme
  >
   <option v-for="(theme, index) in themes" :key="index" class="ml-5">
    {{ theme }}
   </option>
  </select> -->

</template>

<script>
import { themeChange } from 'theme-change'

export default {
 data() {
  return {
   themes: [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    ],
   key: '',
  }
 },

 async mounted() {
  themeChange(false)
  await this.getTheme()
 },

 methods: {
  getTheme() {
   this.key = localStorage.getItem('theme') || 'light'
   return this.key
  },
  changeTheme(theme) {
    this.key = theme
  }
 },
}
</script>
