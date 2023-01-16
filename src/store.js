import { reactive } from 'vue';

export const store = reactive({
    selected: 'Select Archetype',
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
    cardsInfo: [],
    cardsFound: ""
});