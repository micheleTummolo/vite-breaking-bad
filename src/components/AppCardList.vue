<script>
import Card from './Card.vue';

import { store } from '../store.js';

export default {
    components: {
        Card,
    },

    data() {
        return {
            store
        }
    },

    props: {
        card: Array,
    }
}
</script>
<template lang="">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 card_list">
        <div v-for="(item, index) in store.cardsInfo" class="col">
            <Card :card="item"></Card>
        </div>
    </div>
</template>
<style lang="scss">

</style>