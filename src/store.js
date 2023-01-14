import { reactive } from 'vue';

export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?&type=Effect Monster&level=1&atk=0&def=0&race=Fiend&attribute=DARK&frameType=effect",
    cardsInfo: [],
});