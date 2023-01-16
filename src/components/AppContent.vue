<script>
import AppSearch from './AppSearch.vue';
import AppCardsFound from './AppCardsFound.vue';
import CardList from './AppCardList.vue';

import { store } from '../store.js';

export default {
    components: {
        AppSearch,
        AppCardsFound,
        CardList,
    },

    data() {
        return {
            store
        }
    },

    methods: {
        changeValue() {
            store.url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + store.selected

            axios.get(store.url).then((response) => {
                store.cardsInfo = response.data.data
            })

            store.cardsFound = store.cardsInfo.length
        }
    },

}
</script>
<template lang="">
    <AppSearch @selected="changeValue"></AppSearch>
    <div class="row mt-4 p-5  content">
        <div class="col p-0">
            <AppCardsFound></AppCardsFound>
            <CardList></CardList>
        </div>
    </div>
</template>
<style lang="scss">
.content {
    background-color: white;
}
</style>