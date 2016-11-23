<template>
  <div class="questionList">

    <md-list class="custom-list md-triple-line">

      <md-list-item v-for="question in questions">
        <router-link :to="{name: 'home'}">
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People"></md-avatar>

          <div class="md-list-text-container">
            <p>{{ question.content }}</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">arrow-forward</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </router-link>
      </md-list-item>

    </md-list>

    <md-button class="md-dense">Loading More</md-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['questions'])
  },
  methods: {
    ...mapActions(['getQuestions'])
  },
  created () {
    this.getQuestions()
  }
}
</script>