
<template>
  <div class="bg-transparent">
   
    

    <!-- Filters -->
    <section aria-labelledby="filter-heading">
      <h2 id="filter-heading" class="sr-only">Filters</h2>

     

      <!-- Active filters -->
      <div class="bg-transparent relative grid ">

          
        <div class="max-w-7xl mx-auto py-3 px-4 sm:grid sm:items-center sm:px-6 lg:px-8">
         
        <div class="">

          <h3 class="text-xs text-center font-semibold uppercase tracking-wide text-white">
            Buscar por Categorias o Filtros
            
          </h3>
          </div>
          

          

          <div class="sm:mt-0 sm:ml-4">
            <div class="-m-1 mt-2 flex flex-wrap items-center">
              <span v-for="filtro in userStore.categories.data" :key="filtro.id" class="m-1 inline-flex rounded-full  items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
               <button @click="userStore.getCatbyid(filtro.id)"><span>{{ filtro.Nombre }}</span></button> 
               
              
              </span>
            </div>
          </div>


        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

import {useUserStore} from '../stores/user'




export default {
  
  setup() {
   
    const userStore = useUserStore()

    return {
      userStore,
    }
  },
}
</script>