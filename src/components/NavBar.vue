<template>
  <div class="container-fluid p-0" id="reborn-nav">
    <!--NAVBAR REBORN -->

    <div class="text-center"></div>
    <nav class="navbar navbar-expand-lg navbar-color bg-color">
      <div class="container-fluid navigazione">
        <button
          class="navbar-toggler navbar-toggler-right navmobile navbar-text button "
          
          style="color: white"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <p class="menu">Menù</p>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="col-8">
          <ul class="navbar-nav">
             <li class="nav-item">
               <router-link active style="color: #daa621; font-weight: bold" class="nav-link active" to="/shop-products">
                <img style="width: 150px;" src="img_product\logo_reborn.jpeg"  alt="Reborn_Home"></router-link>
                 
                <li class="nav-item">
               <router-link active style="color: #daa621; font-weight: bold" class="nav-link active" to="/shop-products"
                >Market Place</router-link>


               <li class="nav-item">
               <router-link active style="color: #daa621; font-weight: bold" class="nav-link active" to="/about"
                >Reborn Team</router-link>

              </li>
              


          </ul></div>
          <div class="col-2"> <li class="nav-item" style=" color:#daa621;" >Siete loggati con: {{nowUser}}</li></div>
          <div class="col-2">
              <li class="nav-item" id="log-select">
              <select
              
              class="form-select"
              aria-label="Default select example"
              v-on:change="changeLogged($event)"
            >
              <option selected>Seleziona l'utenza da loggare</option>
              <option v-for="user in selectLogged " v-bind:key="user.idTeam"  :value="user.name">{{user.name}}</option>
            </select> </li></div>
        </div>
      </div>
    </nav>
    

    <!-- FINE NAVBAR -->

    <!-- TASTI FUNZIONE AVANZATI -->
    
    <div id="underrow" class="d-grid gap-2 d-md-flex justify-content-md-end pt-3 pb-3">
      <router-link class="nav-link" to="/add-product"><button class="btn btn-color me-md-2" type="button">+ Vendi Prodotto</button></router-link>
        <router-link class="nav-link" to="/cart"><button class="btn btn-color me-md-2" type="button">Carrello {{ elementCart.length }} </button></router-link>
      </div>
      <div class="row p-3"><div class="col-12"><h4 style="cololor:#1d2142;">Ciao {{nowUser}}, felici di rivederti.... </h4></div></div>

      

    <!-- FINE TASTI -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  /* faccio uscire la proprietà "productReborn" | Sarà bindata attraverso la proprietà "computed" -> "productsIn" in "Home.vue" 
  che richiama i dati effettivi del modello "products". */
  props: [
    /* proprietà */
  ],

  data: function () {
    return {
      nowUser: "Ospite Reborn",
    };
  },
  methods: {
    /*commit che gestisce la mutation di visualizzazione di utente loggato*/

    changeUserShow: function () {
      this.$store.commit("changeOnline", this.nowUser);
    },

    /* cambia il balore di nowUser in base al valore selezionato*/

    changeLogged: function (event) {
      return (this.nowUser = event.target.value);
    },
  },

  computed: {
    /* Prendo l'array cart */
    elementCart: function () {
      return this.$store.getters.getCart;
    },

    /* fa vedere la lista di utenti registrati e loggabili */

    selectLogged: function () {
      return this.$store.getters.getLoggedUser;
    },

    /* prende il valore OnUser */

    onlineUser: function () {
      return this.$store.getters.getOnline;
    },

    /*fine*/
  },
};
</script>
