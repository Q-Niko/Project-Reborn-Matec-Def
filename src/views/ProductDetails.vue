
<template>
  <div class="container-fluid" id="area-details">
    <!-- INIZIO BLOCCO -->

    <div class="container">
      <h1 class="pt-3 pb-3">
        {{ this.listProduct[productSelected].name
        }}<span class="badge bg-secondary"></span>
      </h1>
      <div class="row pb-5">
        <!--box articolo -->
        <div class="col-md-5 mt-2 border">
          <!--colonna immagini  -->

          <div class="col-12">
            <img class="img-100-reb"
              v-show="showImgTop == true"
              :src="listProduct[productSelected].nameImage"
              :alt="listProduct[productSelected].alt"
            />
            <img class="img-100-reb"
              id="Var1"
              v-show="showVariant1 == true"
              :src="listProduct[productSelected].imgV1"
              :alt="listProduct[productSelected].alt"
            />
            <img class="img-100-reb"
              id="Var2"
              v-show="showVariant2 == true"
              :src="listProduct[productSelected].imgV2"
              :alt="listProduct[productSelected].alt"
            />
            <img class="img-100-reb"
              id="Var3"
              v-show="showVariant3 == true"
              :src="listProduct[productSelected].imgV3"
              :alt="listProduct[productSelected].alt"
            />
            <img class="img-100-reb"
              id="Var4"
              v-show="showVariant4 == true"
              :src="listProduct[productSelected].imgV4"
              :alt="listProduct[productSelected].alt"
            />
          </div>
        </div>
        <div class="col-md-4 mt-2 border">
          <!--colonna dettaglio prodotto -->
          <h5>Venduto da:</h5>
          
            <div class="btn btn-primary vendor-area">
              {{ listProduct[productSelected].seller.name }}
              {{ listProduct[productSelected].seller.surname }}
              <p class="badge badge-light"
                >Rating: <span class="ratingxs">{{ listProduct[productSelected].seller.rating }}</span></p
              >
              <h5 class="role" >Il veditore è un: {{ listProduct[productSelected].seller.role }}</h5>
            </div>
          
          <hr />

          
          <p>L'oggetto si trova: {{ listProduct[productSelected].location.nation }} | {{ listProduct[productSelected].location.city }}</p>
          

          <hr />
          <ul >
          <li v-for="info in this.listProduct[productSelected].addInfo" :key="info"> {{info}} </li>
           </ul>

          <hr />
          <p>Informazioni sul prodotto:</p>
          <p>{{ listProduct[productSelected].description }}</p>
          <p>Opzioni colore:</p>
          <div class="container">
            <div class="row g-2">
              <div class="col-6">
                <div @mouseover="showImgTop=false; showVariant1=true;" @mouseleave="showImgTop=true; showVariant1=false" class="p-3 border bg-light">Variante 1</div>
              </div>
              <div class="col-6">
                <div @mouseover="showImgTop=false; showVariant2=true;" @mouseleave="showImgTop=true; showVariant2=false" class="p-3 border bg-light">Variante 2</div>
              </div>
              <div class="col-6">
                <div @mouseover="showImgTop=false; showVariant3=true;" @mouseleave="showImgTop=true; showVariant3=false" class="p-3 border bg-light">Variante 3</div>
              </div>
              <div class="col-6">
                <div @mouseover="showImgTop=false; showVariant4=true;" @mouseleave="showImgTop=true; showVariant4=false" class="p-3 border bg-light">Variante 4</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 mt-2 border">
          <!--colonna sezione acquisto  -->
          <h2>
            {{ listProduct[productSelected].price }} €
            <span class="badge bg-secondary"></span>
          </h2>

          <h6>
            Pezzi disponibili: {{ listProduct[productSelected].inventory }}
          </h6>
          <p v-show="currentInventory >= 10">Disponibilità immediata.</p>
          <p v-show="currentInventory < 3 && currentInventory != 0">
            Disponibilità scarsa
          </p>
          <p v-show="currentInventory == 0">Non disponibile</p>

          <div>
            <button
              :disabled="currentInventory == 0"
              v-on:click="
                addToCart();
                cutInventory();
              "
              class="btn btn-color me-md-2 mt-4"
              style="width: 100%"
              type="button"
            >
              Aggiungi al carrello
            </button>
            <button
              :disabled="elementCart.length == 0"
              class="btn btn-color mt-4"
              style="width: 100%"
              type="button"
            >
              <router-link class="nav-link" to="/cart"
                >Concludi Ordine</router-link
              >
            </button>
          </div>
          <form @submit.prevent="loadComment" class="pt-5">
            <h5>Recensioni</h5>
            <div class="form-group">
              <label for="utenterecensioni">Nome utente:</label>
              <input
                type="email"
                class="form-control"
                id="utenterecensioni"
                :placeholder="onlineUser"
                readonly
              />
            </div>

            <div class="form-group pt-2">
              <label for="exampleFormControlTextarea1"
                >Scrivi una recensione:</label
              >
              <textarea v-model="newComment"
                  required
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button
                class="btn btn-invia mt-4 justify-content-center"
                style="
                  width: 35%;
                  height: 35px;
                  text-align: center;
                  border-color: black;
                "
                type="submit"
              >
                Invia
              </button>
            </div>
          </form>

          <div class="row commenti">
            <div class="commentirecenti pt-4">
              <h5 class="commentirecenti">Commenti recenti</h5>
              <p>{{ listProduct[productSelected].comments[ listProduct[productSelected].comments.length - 1]}}</p>
            </div>
          </div>
          <div class="row">
            <div class="altricommenti">
              <h5>Tutti i commenti</h5>
              <ul  style="list-style-type: none">
                <li v-for="comment in listProduct[productSelected].comments" :key="comment.index"> {{ comment }} </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FINE BLOCCO -->
    <Footer/>
  </div>
 
</template>
 
<script>
import Footer from '@/components/Footer.vue';

export default {
  components:{
    Footer
  },
  name: "area-details",
  props: ["id"],
  data: function () {
    return {
      newComment: [],
      showImgTop: true,
      showVariant1: false,
      showVariant2: false,
      showVariant3: false,
      showVariant4: false,
    };
  },

  methods: {
    loadComment: function () {
      return this.$store.state.products[this.productSelected].comments.push(
         "*" + this.onlineUser  + " > " + this.newComment
      );
    },

    /* fine*/

    addToCart: function () {
      return this.$store.state.cart.push(
        this.productSelected
      ); /* mette il valore dell'indice prodotto nell'array cart */
    },

    /* fine */

    cutToCart: function () {
      return (this.$store.state.cart = []);
    },

    /* fine */

    cutInventory: function () {
      this.$store.commit("reduceInventory", this.productSelected);
    },
    /* fine */

    /* ripristiniamo l'inventario */

    

    /* cambio immagini */

    /* fine */
  },

  computed: {
    /* Si reperisce la path personalizzato che corrisponde all'id del prodotto, associato tramite route. 
        Lo uso per determinare l'indice del prodotto (e di dati) da visualizzare../*/
    productSelected: function () {
      return this.$route.params.id - 1;
    },

    /* Si reperisce la lista prodotti tramite un getters in index.js*/
    listProduct: function () {
      return this.$store.getters.getProducts;
    },

    /* fine */

    /* Abbrevio per richiamare il valore corrente */
    currentInventory: function () {
      return this.listProduct[this.productSelected].inventory;
    },

    /* fine */

    /* prende il valore OnUser */

    onlineUser: function () {
      return this.$store.getters.getOnline;
    },

    /* fine */

    /* Abbrevio per richiamare il valore dello stock iniziale */
    initialStock: function () {
      return this.listProduct[this.productSelected].initialInventory;
    },

    /* fine */

    /* Prendo l'array cart */
    elementCart: function () {
      return this.$store.getters.getCart;
    },

    /* fine */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">

.role { 
background-color: crimson;
padding: 10px;
border-radius: 15px;
font-size: small;}

.vendor-area {

  width: 100%;
  background-color: #1d2142;
}

.img-100-reb { width:100%}

</style>
