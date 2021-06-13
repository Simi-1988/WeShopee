<template>
    <div>
        <h1 class="pt-5 pb-4">Welcome back!</h1>

        <!-- All lists of products -->
        <b-container class="bv-example-row">
            <b-row>
                <div class="col-md-4" v-for="product in products" v-bind:key="product.id">
                    <b-card class="mb-2">
                        <img :src="product.image" img-alt="Image" img-top tag="article" style="max-width: 20rem;"
        class="mb-2">
                        <p<h5>{{ product.title }}</h5></p>
                        <p>{{ product.description }}</p>
                        <p><h5>{{ product.price }}</h5></p>
                        <b-button href="#" variant="primary" @click="addToCart(product.id)">Add to Cart</b-button> 
                    
                        
                    </b-card>
                </div> 
             </b-row>
        </b-container>
    </div> 
</template>

<script>

export default {
    computed: {
        products() { return this.$store.getters.products; },
    },
    methods: {
        addToCart(id) {
            this.$store.dispatch('addToCartWithQty', { id: id, qty: 1 });
            this.$router.push('/shoppingCart')
        }
    },
};
</script>