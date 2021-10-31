  <template >
  <div class="container-fluid " id="add-product">
   <!--INIZIO FORM -->
     
     <div class="">
    <div class="pt-5 pb-5">
  
    <!-- Grid row -->
    <div class="row">
  
      <!-- Grid column -->
      
        <div class="row">
          <h1 class="pt-3 pb-3">Vendi prodotto <span class="badge bg-secondary"></span></h1>
        </div>
        
        <form @submit.prevent="loadProduct">
      <div class="col-lg-6 mb-5 mb-lg-0">
      
        <h4 class="mb-4 pb-1" style="color: #1d2142;">Dettagli prodotto</h4>
  
        <!-- Grid row -->
        <div class="row">
  
          <!-- Grid column -->
          <div class="col-lg-6">
  
            
            <div class="md-form md-outline mt-0 ">
              <label for="nome_prodotto">Nome prodotto</label>
              <input v-model="newProduct.name" type="text" id="nome_prodotto" value="" placeholder="Nome" class="form-control">
              
            </div>

            <div class="md-form md-outline mt-0 ">
            <label for="descrizione">Descrizione prodotto</label>
            <textarea v-model="newProduct.description" id="descrizione" class="md-textarea form-control" rows="4"></textarea>
              
            </div>

            
        
  
          </div>

          <div class="col-lg-6">
  
            
            <div class="md-form md-outline mt-0 ">
              <label for="immagine-top">Immagine Principale (Cover)</label>
              <input readonly v-model="newProduct.nameImage" type="text" id="immagine-top" placeholder="Immagine Nuovo Prodotto" class="form-control">
              
            </div>

            <div class="md-form md-outline mt-0 ">
              <label for="immagine-v1">Immagine (Variante 1)</label>
              <input readonly v-model="newProduct.imgV1" type="text" id="immagine-v1" placeholder="Immagine Alternativa 1" class="form-control">
              
            </div>
            <div class="md-form md-outline mt-0 ">
              <label for="immagine-v2">Immagine (Variante 2)</label>
              <input readonly v-model="newProduct.imgV2" type="text" id="immagine-v2" placeholder="Immagine Alternativa 2" class="form-control">
              
            </div>
            <div class="md-form md-outline mt-0 ">
              <label for="immagine-v3">Immagine (Variante 3)</label>
              <input readonly v-model="newProduct.imgV3" type="text" id="immagine-v3" placeholder="Immagine Alternativa 3" class="form-control">
              
            </div>

            <div class="md-form md-outline mt-0 ">
              <label for="immagine-v4">Immagine (Variante 4)</label>
              <input readonly v-model="newProduct.imgV4" type="text" id="immagine-v4" placeholder="Immagine Alternativa 4" class="form-control">
              
            </div>
  
  
          </div>

            
            <div class="md-form md-outline pt-4">
              <label for="descr_breve">Descrizione breve</label>
              <textarea v-model="newProduct.shortInfo" id="descr_breve" class="md-textarea form-control" rows="4"></textarea>
              
            </div>

            
            <div class="md-form md-outline pt-4">
              <label for="parola_chiave">Parole chiave</label>
              <input v-model="newProduct.alt" type="text" id="parola_chiave" placeholder="Sedia, legno, vintage, ecc..." class="form-control">
              
            </div>

            <div class="md-form md-outline pt-4">
              <label for="codice">Codice prodotto</label>
              <input v-model="newProduct.productCode" type="text" id="codice" class="form-control">
              
            </div>

        </div>

        
        
    <!--da fare-->
      
        <div class="d-flex flex-wrap">
          <div class="select-outline position-relative w-100 pt-4">
            <label style="padding-right:2%;" for="categoria" id="categoria">Professione</label>
            <select v-model="newProduct.seller.role" class="mdb-select md-form md-outline" id="categoria" placeholder="Scegli">
              <option value="Acquirente" selected >Seleziona</option>
              <option value="Antiquario">Antiquario</option>
              <option value="Collezionista">Collezionista</option>
              <option value="Artigiano">Artigiano</option>
            </select>
          </div>
        </div>
  
        
        <div class="md-form md-outline mt-0 pt-4">
          <label for="prezzo">Prezzo</label>
          <input v-model.number="newProduct.price" type="number" id="prezzo" placeholder="" value="" class="form-control">
          
        </div>
  
        
        <div class="form-check pl-0 mb-4 mb-lg-0 pt-4 nuovoaccount">
          <label class="form-check-label small text-uppercase card-link-secondary" for="rateizzazione">Rateizzabile</label>
          <input v-model="newProduct.facilities" type="checkbox" class="form-check-input filled-in" id="rateizzazione" value="Rateizzabile">
          
        </div>

        <div class="col-lg-12 pt-5">
        <h5>Provenienza</h5>
  
          
          <div class="md-form md-outline ">
            <label for="stato">Stato</label>
            <input v-model="newProduct.location.nation" type="text" id="stato" class="form-control">
            
          </div>

        </div>
        <div class="col-lg-12">
  
          
          <div class="md-form md-outline pt-4">
            <label for="citta">Città</label>
            <input v-model="newProduct.location.city" type="text" id="citta" class="form-control">
            
          </div>

        </div>

        <!-- da fare -->
  
        <div class="d-flex flex-wrap">
          <div class="select-outline position-relative w-100 pt-4">
            <label style="padding-right:2%;" for="disponibile" id="categoria">Disponibilità</label>
            <select v-model="newProduct.available" class="mdb-select md-form md-outline" id="disponibile">
              <option value="true" disabled selected>Seleziona</option>
              <option value="true">Disponibile</option>
              <option value="false">Non disponibile</option>
              
            </select>
          </div>
        </div>
  
        
        <div class="md-form md-outline pt-4">
          <label for="pezzi">Quanti pezzi vuoi vendere</label>
          <input v-model.number="newProduct.inventory" type="number" id="pezzi" class="form-control">
          
        </div>
        
        
      </div>
      

      
     
  
      
      <div class="scopridipiu pt-2 pb-1" style="justify-content: center; width: 100%;" >
        <button class="btn btn-color invia" >Carica Prodotto </button>
      </div>

      
        </form>
  
      </div>
     
  </div>
    </div>
    

     


   <!-- FINE FORM -->
    <Footer/>
  </div>
    





  
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components:{
    Footer
  },
  data: function () {
    return {
      /* ripropongo l'albero degli attributi (destinazioni del form) perché possa essere popolati. */
      newProduct: {
        name: "",
        nameImage: "./img_product/segnaposto_principale.jpg",
        imgV1: "./img_product/segnaposto_V1.jpg",
        imgV2: "./img_product/segnaposto_V2.jpg",
        imgV3: "./img_product/segnaposto_V3.jpg",
        imgV4: "./img_product/segnaposto_V4.jpg",
        shortInfo: "",
        description: "",
        addInfo: [
          
          "Materiale: Idonei al nuovo Prodotto",
          "Peso:Variabile",
          "Stile:Da valutare",
          "Status:Da valutare",
          

          ],
        alt: "",
        productCode: "",
        price:222,
        facilities: "",
        available: true,
        inventory:0,
        initialInventory: 10,
        published: true,
        special:false,
        seller: {
          name: "Utente",
          surname:"Ospite",
          role: "",
          rating: 1,

        },
        location: {
          nation:"",
          city:"",
        },
        comments: [
          "Nuovo Prodotto!",
        ] /* necessario per popolare la voce di nuovi commenti "newComment" in --> ProductDetails*/,
      },
      user: {},
    };
  },
  methods: {
    loadProduct: function () {
      this.$store.commit("addNewProduct", this.newProduct);
      this.$router.push({ name: "Products" });
    },
  },

  computed: {
    /* prende il valore OnUser */

    onlineUser: function () {
      return this.$store.getters.getOnline;
    },
  },
};
</script>