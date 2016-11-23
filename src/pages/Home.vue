<template>
  <div id="app" v-md-theme="'default'">

    <div class="header-base">
      <md-toolbar>
        <div class="md-toolbar-container">

          <h2 class="md-title" style="flex: 1;">YanYu</h2>

          <md-button class="md-icon-button">
            <md-icon>add</md-icon>
          </md-button>
        </div>
      </md-toolbar>
    </div>

    <question-list></question-list>

  </div>
</template>

<script>
import QuestionList from '../components/QuestionList'

export default {
  name: 'home_page',
  components: {
    QuestionList
  }
}
</script>

<style type="text/css">
.md-whiteframe {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>