<template>
  <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4" style="display: inline-block;">
    <!--box articolo -->
    <div v-show="productReborn.special == true" class="card special-reborn">
      <img
        :src="productReborn.nameImage"
        class="card-img-top img-thumbnail"
        :alt="productReborn.alt"
      />
      <div class="card-body ">
        <table class="row">
          <td class="card-link" style="width: 100%">
            <h5>{{ productReborn.name }}</h5>
          </td>
          <td class="card-link p-2 m-0">
            <h4>{{ productReborn.price }} €</h4>
          </td>
        </table>
        <p class="card-text">{{ productReborn.shortInfo }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          {{ productReborn.seller.name }} | Voto:
          <span v-for="item in productReborn.seller.rating" :key="item"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              /></svg
          ></span>
        </li>
        <li class="list-group-item">
          {{ productReborn.location.city }} |
          {{ productReborn.location.nation }}
        </li>
        <li class="list-group-item">
          Disponibilità: {{ productReborn.inventory }}
        </li>
      </ul>
      <div class="scopridipiu pt-2 pb-1">
        <router-link
          v-bind:to="{
            name: 'product_details',
            params: { id: productReborn.id },
          }"
          ><button class="btn btn-color ">Scopri di più</button></router-link
        >

        <button
          @click="pushWishList"
          type="button"
          class="btn btn-danger p-1 m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-bookmark-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProductSpecial",
  /* faccio uscire la proprietà "productReborn" | Sarà bindata attraverso la proprietà "computed" -> "productsIn" in "Home.vue" 
  che richiama i dati effettivi del modello "products". */
  props: ["productReborn"],

  data: function() {
    return {};
  },
  methods: {
    /* inserisco attraverso l'id, l'indice del prodotto preferito */

    pushWishList: function() {
      this.$store.commit("pushWish", this.productReborn.id - 1);
    },
  },
  computed: {
    listWhish: function() {
      return this.$store.getters.getWish;
    },
  },
};
</script>

<style  scoped >

.special-reborn { background-color: bisque;}

</style>
