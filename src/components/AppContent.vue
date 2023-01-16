<script>
import CardList from './AppCardList.vue';
import AppSearch from './AppSearch.vue';

import { store } from '../store.js';

export default {
    components: {
        CardList,
        AppSearch,
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
            console.log(store.selected)
            console.log(store.url)
        }
    },

}
</script>
<template lang="">
    <AppSearch @selected="changeValue"></AppSearch>
    <div class="row mt-4 p-5  content">
        <div class="col p-0">
            <CardList></CardList>
        </div>
    </div>
</template>
<style lang="scss">
.content {
    background-color: white;
}
</style>