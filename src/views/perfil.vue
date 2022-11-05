
<template>
  <div>
     <Navbar/>

    <main class="relative -mt-48 mr-8 ml-8">
      
      
      <Proveedorper v-show="!userStore.loadingSession"/>
      <Proveedor v-show="userStore.loadingSession"/>
    
     
      
    </main>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import Cat from '../components/categories.vue'
import List from '../components/result.vue'
import Empty from '../components/empty.vue'
import Login from '../components/login.vue'
import Proveedor from '../components/proveedor.vue'
import Proveedorper from '../components/proveedorper.vue'
import {useUserStore} from '../stores/user'
import Navbar from '../components/navbar.vue'





export default {
  components: {
  
    Cat,
    List,
    Empty,
    Proveedor,
    Proveedorper,
     Login,
     Navbar
  },
  setup() {
   
    const userStore = useUserStore()

    return {
      userStore
    }
  },
}
</script>




    