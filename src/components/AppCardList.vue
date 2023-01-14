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
    <div class="row card_list">
        <div v-for="(item, index) in store.cardsInfo" class="col card_container">
            <Card :card="item"></Card>
        </div>
    </div>
</template>
<style lang="scss">

</style>