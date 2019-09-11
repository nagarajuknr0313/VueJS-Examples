import Vue from 'vue'
import VueX from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        products: [{
                name: "Banana Skin",
                price: 20
            },
            {
                name: "Shiny Star",
                price: 40
            },
            {
                name: "Green Shells",
                price: 60
            },
            {
                name: "Red Shells",
                price: 80
            }
        ]
    }
})