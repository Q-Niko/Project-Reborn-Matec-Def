<template>
  <div>Home Page</div>

</template>

<script>
// @ is an alias to /src
/*import NOME from "@/components/NOME.vue";*/

export default {
  name: "Home",
  components: {
    /* componente, */
  },
  computed: {
    /* associo "productIn" ai "Products" del modello generale presente in "index.js*/
    productsIn: function () {
      return this.$store.state.products;
    },
  },
};
</script>
