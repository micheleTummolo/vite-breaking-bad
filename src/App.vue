<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

import { store } from './store.js';

export default {
  components: {
    AppContent,
    AppHeader
  },

  data() {
    return {
      store
    }
  },

  beforeMount() {
    this.getCards();
  },

  methods: {
    getCards() {
      axios.get(store.url).then((response) => {
        store.cardsInfo = response.data.data
      })
    }
  },
}
</script>
<template lang="">
  <AppHeader></AppHeader>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <AppContent></AppContent>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables.scss' as *;

main {
  background-color: $primary_color;
}
</style>