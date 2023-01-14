<script>
import CardList from './AppCardList.vue';

export default {
    components: {
        CardList,
    }

}
</script>
<template lang="">
    <div class="row mt-5 p-5  content">
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