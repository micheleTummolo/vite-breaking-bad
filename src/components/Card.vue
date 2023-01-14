<script>

export default {
    props: {
        card: Object,
    }

}
</script>
<template>
    <div class="myCard mb-3 pb-2">
        <div class="img">
            <img :src="card.card_images[0].image_url" alt="image not found" class="w-100">
        </div>
        <div class="name mt-3">
            <h3>{{ card.name }}</h3>
        </div>
        <div class="info mt-4">
            <h3>{{ card.archetype }}</h3>
        </div>

    </div>
</template>
<style lang="scss">
@use '../style/partials/variables.scss' as *;

.myCard {
    background-color: $primary_color;

    .name {
        text-align: center;
        color: white;
        text-transform: uppercase;

        h3 {
            font-size: 1rem;
            font-weight: 600;
        }
    }

    .info {
        text-align: center;

        h3 {
            font-size: 1rem;
        }
    }
}
</style>