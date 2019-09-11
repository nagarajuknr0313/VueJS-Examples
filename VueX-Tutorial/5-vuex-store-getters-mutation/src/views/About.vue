<template>
  <div class="about">
  <h2>Product List One</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
   computed: {
        products(){
            return this.$store.state.products
        },
        saleProducts(){
            return this.$store.getters.saleProducts
        }
    },
    methods: {
        reducePrice: function(){
            /* this.$store.state.products.forEach( product => {
                product.price -= 1
            }); */
            this.$store.commit('reducePrice');
        }
    }
}
;
</script>