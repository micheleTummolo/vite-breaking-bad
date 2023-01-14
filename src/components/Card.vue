<script>

export default {
    props: {
        card: Object,
    }

}
</script>
<template>
    <div class="myCard">
        <div class="img">
            <img :src="card.card_images[0].image_url" alt="image not found">
        </div>
    </div>
</template>
<style lang="scss">
img {
    width: 100px;
}
</style>