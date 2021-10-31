<template>
  <footer class="bg-color text-center text-white absolute">
          <!-- Grid container -->
          <div class="container p-4 pb-0">
            <!-- Section: Form -->
            <section class="">
              <form @submit.prevent="loadMail">
                <!--Grid row-->
                <div class="row d-flex justify-content-center">
                  <!--Grid column-->
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Iscriviti alla newsletter</strong>
                    </p>
                  </div>
                  <!--Grid column-->
        
                  <!--Grid column-->
                  <div class="col-md-5 col-12">
                    <!-- Email input -->
                    <div class="form-outline form-white mb-4">
                      <input v-model="newMail" type="email" id="nesfooter" class="form-control" />
                      <label class="form-label" for="nesfooter">Solo oggi si sono già iscritti: {{this.listMail.length}} persone! </label>
                    </div>
                  </div>
                  <!--Grid column-->
        
                  <!--Grid column-->
                  <div class="col-auto">
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-outline-light mb-4">
                      Iscriviti
                    </button>
                  </div>
                  <!--Grid column-->
                </div>
                <!--Grid row-->
              </form>
            </section>
            <!-- Section: Form -->
          </div>
          <!-- Grid container -->
        
          <!-- Copyright -->
          <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2021 Copyright:
            <a class="text-white" href="#">Reborn.it</a>
          </div>
          <!-- Copyright -->
        </footer>
</template>

<script>
export default {
  name: "Footer",
  
  props: [
    
  ],

  data: function () {
    return {
      newMail:"",
      
    };
  },

   methods: {
    loadMail: function () {
      this.$store.commit("addNewMail", this.newMail);
      
    },
  },
    

  computed: {

  listMail: function () {
      return this.$store.getters.getMail;
    },



  },

  
}
</script>
