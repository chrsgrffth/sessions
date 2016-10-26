// Import.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResrouce from 'vue-resource'

// Get configuration and environment variables.
import Config from './../config';
Config();

// Components.
import Home from './components/views/home.vue'
import Auth from './components/views/auth.vue'

// Register.
Vue.use(VueRouter)


// Define routes.
const routes = [
  { 
    path: '/',
    component: Home 
  },
  {
    name: 'Authorization',
    path: '/auth',
    component: Auth
  }
]

// Define router.
const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
  // console.log(localStorage.getItem('accessToken'));

  // if (!window.__env) {
  //   console.warn('[SESSION] Configuration not found. Does "config.js" exist?');
  //   return
  // } else {
  //   transition.next()
  // }
  
  // if (localStorage.getItem('accessToken') == null) {
  //   var client_id = window.__env.clientId;
  //   var redirect_uri = 'http://playlists.dev/auth';
  //   var scope = 'playlist-modify-public playlist-read-private user-read-email';

  //   window.open('https://accounts.spotify.com/authorize' +
  //     '?client_id=' + encodeURIComponent(client_id) +
  //     '&redirect_uri=' + encodeURIComponent(redirect_uri) +
  //     '&scope=' + encodeURIComponent(scope) +
  //     '&response_type=token');
  // } 
  // else {
  //   transition.next();
  // }
// })


// Instantiate app.
const app = new Vue({
  router
}).$mount('#app')

