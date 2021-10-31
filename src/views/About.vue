<template>
  <div class="container-fluid  " id="about">
            <div class="row">
              <div class="col-md-4 mt-2 pt-5 pb-5">  <!--box articolo -->
                <div class="card" >
                    <img :src="selectTeam[0].img" class="card-img-top" :alt="selectTeam.alt">
                    <div class="card-body">
                      <h5 class="card-title text-center">{{selectTeam[0].name}} {{selectTeam[0].surname}} </h5>
                      <p class="card-text text-center ">{{selectTeam[0].role}}</p>
                      <p class="card-text reborn_text">{{selectTeam[0].biography}}</p>
                      <p class="card-text text-center">{{selectTeam[0].email}}</p>
                      <p class="card-text text-center">{{selectTeam[0].city}}</p>
                    </div>
                  </div>
              </div>
              <div class="col-md-4 mt-2 pt-5 pb-5">  <!--box articolo -->
                <div class="card" >
                    <img :src="selectTeam[1].img" class="card-img-top" :alt="selectTeam.alt">
                    <div class="card-body">
                      <h5 class="card-title text-center">{{selectTeam[1].name}} {{selectTeam[1].surname}} </h5>
                      <p class="card-text text-center ">{{selectTeam[1].role}}</p>
                      <p class="card-text reborn_text" >{{selectTeam[1].biography}}</p>
                      <p class="card-text text-center">{{selectTeam[1].email}}</p>
                      <p class="card-text text-center">{{selectTeam[1].city}}</p>
                    </div>
                  </div>
              </div>
              <div class="col-md-4 mt-2 pt-5 pb-5">  <!--box articolo -->
                <div class="card" >
                    <img :src="selectTeam[2].img" class="card-img-top" :alt="selectTeam.alt">
                    <div class="card-body">
                      <h5 class="card-title text-center">{{selectTeam[2].name}} {{selectTeam[2].surname}} </h5>
                      <p class="card-text text-center ">{{selectTeam[2].role}}</p>
                      <p class="card-text reborn_text">{{selectTeam[2].biography}}</p>
                      <p class="card-text text-center">{{selectTeam[2].email}}</p>
                      <p class="card-text text-center">{{selectTeam[2].city}}</p>
                    </div>
                  </div>
              </div>
          
        </div>
<Footer/>
        </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  components:{
    Footer
  },
  name: "About",
  props: [] ,
  data: function () {
    return {
      
    };
  },

  methods: {},
  

  computed: {

    selectTeam: function () {
      return this.$store.getters.getLoggedUser;
    },

  }

}
    
</script>

<style scoped="scoped">

.reborn_text {    
  text-align: justify;
    font-size: smaller;
}


</style>
