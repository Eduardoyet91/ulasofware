
<template>
  <div>
    <Navbar/>
    

    <main class="relative grid grid-cols-3 -mt-48 mr-2 ml-2">
       

     <div>
        <div class="grid mt-4 px-2 flex justify-center lg:ml-2 lg:justify-center">
              <div class="max-w-lg  w-full lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-sky-100 focus-within:text-gray-400">
                  <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  </div>
                  <input v-model.trim ="query" id="search" name="search" class="block w-full bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 border border-white rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm" placeholder="Search" type="search" />
                </div>
                <p v-show="userStore.error" class="mt-2 ml-8">Debe ingresar un criterio de busqueda</p>
                      <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-center">
             <button @click="userStore.getProveebyQuery(query)"  class="flex mt-4 items-center justify-center px-4 py-2 border border-white text-xs font-medium rounded-md shadow-sm text-white  bg-sky-600 hover:bg-sky-700 sm:px-8">Buscar </button>
 </div>
              </div>

              
             
            </div>
       
            <Cat class="-ml-6"/>
     </div>
     <div class="col-span-2">
       <List class="mt-4" v-show="(!userStore.getC && !userStore.loadingBig)"/>
      <Loading class="mt-4" v-show="userStore.loadingBig"/>
      <Empty v-show="((userStore.result.length === 0) && !userStore.loadingBig)"/>
      
      </div>
            
      
     
      
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

import { SearchIcon } from '@heroicons/vue/solid'
import Loading from '../components/loading.vue'


export default {
  components: {  
    SearchIcon,
    Cat,
    List,
    Empty,
    Proveedor,
    Proveedorper,
     Login,
     Navbar,
     Loading
  },
  setup() {
    
    const userStore = useUserStore()

    return {
          userStore
    }
  },
}
</script>




    