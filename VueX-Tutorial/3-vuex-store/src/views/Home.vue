<template>
  <div >
  <div id="product-list-one">
        <h2>Product List Home page</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
 computed: {
        products(){
            return this.$store.state.products
        }
    }
  
};
</script>
