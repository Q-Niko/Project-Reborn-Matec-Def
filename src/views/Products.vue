<template>

<div class="container-fluid">
  <div class="row">
    <div class="col-sm-8">
      <h2>I nostri articoli ({{this.productsIn.length }})</h2>
      <CardProduct v-for="product in productsIn" :key="product.serial" :productReborn="product"></CardProduct>
    </div>
    <div class="col-sm-4">
     <h2>Gli articoli scelti da noi.</h2>
     <CardProductSpecial v-for="product in productsIn" :key="product.serial" :productReborn="product"></CardProductSpecial>
    </div>
    
  </div>
  <Footer/>
</div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import CardProductSpecial from "@/components/CardProductSpecial.vue";
import Footer from '@/components/Footer.vue';

export default {
  name: "Shop",
  components: {
    CardProduct,
    CardProductSpecial,
    Footer
  },
  computed: {
    productsIn: function () {
      return this.$store.state.products;
    },
  },
};
</script>