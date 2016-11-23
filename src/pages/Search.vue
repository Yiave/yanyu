<template>
  <div id="app" v-md-theme="'default'">

    <div class="header-base">
      <md-toolbar>
        <div class="md-toolbar-container">
          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>
        </div>
      </md-toolbar>
    </div>

    <div class="field-group">
      <md-input-container>
        <label for="movie">University</label>
        <md-select name="movie" id="movie" v-model="movie">
          <md-option value="fight_club">Fight Club</md-option>
          <md-option value="godfather">Godfather</md-option>
          <md-option value="godfather_ii">Godfather II</md-option>
          <md-option value="godfather_iii">Godfather III</md-option>
          <md-option value="godfellas">Godfellas</md-option>
          <md-option value="pulp_fiction">Pulp Fiction</md-option>
          <md-option value="scarface">Scarface</md-option>
        </md-select>
      </md-input-container>

      <md-input-container>
        <label for="country">Major</label>
        <md-select name="country" id="country" v-model="country">
          <md-option value="australia">Australia</md-option>
          <md-option value="brazil">Brazil</md-option>
          <md-option value="japan">Japan</md-option>
          <md-option value="united_states">United States</md-option>
        </md-select>
      </md-input-container>
      
    </div>

  </div>
</template>

<script>

export default {
  name: 'search_page',
}
</script>