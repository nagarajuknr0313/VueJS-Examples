<template>
  <div class="home">
   <h2>Product List home</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
        products(){
            return this.$store.state.products;
        },
        saleProducts(){
            return this.$store.getters.saleProducts;
        }
    },
    methods: {
        reducePrice: function(amount){
            // this.$store.commit('reducePrice', amount);
            this.$store.dispatch('reducePrice', amount);
        }
    }
};
</script>
