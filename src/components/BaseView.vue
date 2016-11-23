<template>
  <div id="app" v-md-theme="'default'">
    <div>
      <transition :name="list_animation">
        <component v-bind:is="activeView" class="view"></component>
      </transition>
    </div>

    <div id="footer-base">
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="home" id="footer-home" 
      md-active @click="changeView('Home', 'left')">
          <router-link to="/home" tag="div">Home</router-link>
        </md-bottom-bar-item>

        <md-bottom-bar-item md-icon="search" id="footer-search" @click="changeView('Search', 'right')">
          <router-link to="/search" tag="div">Search</router-link>
        </md-bottom-bar-item>

        <md-bottom-bar-item md-icon="person" id="footer-me" @click="changeView('Me', 'right')">
          <router-link to="/me" tag="div">Me</router-link>
        </md-bottom-bar-item>
      </md-bottom-bar>

    </div>
  </div>
</template>

<script>
import Home from '../pages/Home'
import Search from '../pages/Search'
import Me from '../pages/Me'

export default {
  name: 'base_page',

  components: {
    Home,
    Search,
    Me
  },
 
  data () {
    return {
      activeView: 'Home',
      list_animation: 'fade-side-left'
    }
  },

  methods: {
    changeView (viewname, direction) {
      this.list_animation = 'fade-side-' + direction
      this.activeView = viewname
    }
  }
}

</script>

<style>
#footer-base {
  display: flex;
    position: absolute;
    width: 100%;
    bottom: 0;
}
</style>