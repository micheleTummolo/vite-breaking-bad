<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },

}
</script>
<template lang="">
    <div class="row my-4">
        <div class="col-2 p-0">
            <select class="form-select" v-model="store.selected" @change="$emit('selected')">
                <option disabled selected hidden>Select Archetype</option>
                <option>Alien</option>
                <option>Abyss Actor</option>
                <option>Adamancipator</option>
                <option>Batteryman</option>
                <option>Blue-Eyes</option>
                <option>Chaos</option>
                <option>Despia</option>
                <option>Guardian</option>
                <option>Mecha Phantom Beast</option>
                <option>Odd-Eyes</option>
            </select>
        </div>
    </div>
</template>
<style lang="">
    
</style>