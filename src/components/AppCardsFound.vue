<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },

}
</script>
<template lang="">
    <div class="row found_container">
        <div class="col">
            <h5 class="p-2">
                Found {{store.cardsFound}} cards
            </h5>
        </div>
    </div>
</template>
<style lang="scss">
.found_container {

    h5 {
        background-color: black;
        color: white;
        font-weight: 700;
    }
}
</style>