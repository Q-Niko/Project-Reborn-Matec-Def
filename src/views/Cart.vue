<template>
  <div class="container-fluid" id="cart">

      <div class="row">
      <div class="col-lg-10">
      <div class="row border rounded margin-right: 2rem contenitorecarrello">

        <div v-for="element in inCart" :key="element" class="prodotto">
        <div class="container">
            <div class="row border-bottom">
                <div class="col-xs-1 col-lg-1">
                
                </div>
                <div class="col-xs-5 col-lg-5 pb-3 imgcarrello">
                    <img :src="inProducts[element].nameImage" width="300px"/>
                </div>
                <div class=" col-xs-6 col-lg-5">
                    <h3>Nome: {{inProducts[element].name}}</h3>
                    <p>Appunti: {{inProducts[element].shortInfo}}</p>
                    <p>Id del prodotto è: {{inProducts[element].id}}</p>
                    <p>Il product Code è: {{inProducts[element].productCode}}</p>
                    <p>L'oggetto si trova {{inProducts[element].location.nation}} > {{inProducts[element].location.city}}</p>
                                  
                    
                </div>
                <div class="col-lg-1">
                    <h4><b>{{inProducts[element].price}} €</b></h4>
                </div>
            </div>
            </div>
        </div>

        
      </div>
      
      <div class="row pt-2">
        <div class="col-lg-10"></div>
        <div class="col-lg-2">
      <button v-on:click="cutToCart(); restoreInventory()" class="rimuovi">Svuota carrello</button> 
      </div>
      </div>
      <div class="row pt-3">
        <div class="col-lg-10"></div>
        <div class="col-lg-2">
          <button type="button" class="btn btn-totaleprovvisorio" data-toggle="button" aria-pressed="false" autocomplete="off">Totale provvisorio( {{priceTotal}} €)</button>
        </div>
        <div class="col-lg-2"></div>
      </div>
      
      </div>
      <div class="col-lg-2 border">
        <div class="aside">
        
        </div>
        <div class="row pb-5">
          <h4 class="desideri"> Lista desideri</h4>
          <p v-show="this.listWhish == 0">Davvero non hai desideri?</p>
          <div class="list-group">
           
            <a v-for="wish in this.listWhish" :key="wish" href="" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">{{inProducts[wish].name}}</h6>
                <small>Prezzo:{{inProducts[wish].price}}</small>
              </div>
              <p class="mb-1">{{inProducts[wish].shortInfo}}</p>
               <router-link v-bind:to="{ name:'product_details', params: { id:inProducts[wish].id } }"><button type="button" class="btn btn-danger">Vai a Prodotto</button></router-link>
            </a>
            
            
          </div>
          
        </div>
        <button v-on:click="cutWishList" class="rimuovi">Svuota WishList</button> 
      </div>
      </div>
  
       
    
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
/*import NOME from "@/components/NOME.vue";*/

import Footer from '@/components/Footer.vue';

export default {
  name: "Cart",
  components: {
    Footer
    
  },
  data: function() {
    return {
      /*dati*/
    };
    },
  computed: {
     inCart: function () { return this.$store.state.cart;},
     
     inProducts:function () { return this.$store.state.products;},

     priceTotal:function () {

         var totalCart = 0;
         for (let item in this.inCart) {
         totalCart = totalCart + (this.inProducts[this.inCart[item]].price);
      }
      return totalCart;



     },

     /* fine */
     
     /* Si reperisce la path personalizzato che corrisponde all'id del prodotto, associato tramite route. 
        Lo uso per determinare l'indice del prodotto (e di dati) da visualizzare../*/
    productSelected: function () {
      return this.$route.params.id - 1;
    },

    /* fine */

    /* Prendo la WishList */
    listWhish: function () {
      return this.$store.getters.getWish;
    },


    
  },

  methods: { 

    cutToCart: function () {
      return (this.$store.state.cart = []);
    },

    cutWishList: function () {
      return (this.$store.state.wishList = []);
    },

    /* fine */

   restoreInventory: function () {
      this.$store.commit("restoreStock", this.productSelected);
    },

    /* fine  */

   

  },
};


    
</script>