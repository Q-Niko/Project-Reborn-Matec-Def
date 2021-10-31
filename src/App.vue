<template>
  <div id="app">

    <NavBar/>
    
  
    <!-- non toccare "router-wiew" -->
    <router-view/>
    
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '@/components/NavBar.vue';



export default {
  name: 'Home',
  components: {
    NavBar,
    
    
  }
}
</script>

<style>

@import"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"; /* ok */
@import"./assets/reborn-css/reborn-style.css"; /* ok */

#app {
  
  /* stili generali */
};

</style>
