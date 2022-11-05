<template>
    <div>
        <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            

            <form class="divide-y divide-gray-200 lg:col-span-12" action="#" method="POST">
              <!-- Profile section -->
              <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg leading-6 font-medium text-gray-900">Perfil Proveedor</h2>
                  <p class="mt-1 text-sm text-gray-500">Informacion sobre el proveedor seleccionado</p>
                </div>

                <div class="mt-6 flex flex-col lg:flex-row">
                  <div class="flex-grow space-y-6">
                    <div>
                      <h1  class="block text-md font-medium text-gray-700"> Proveedor </h1>
                      <div class="mt-1 rounded-md shadow-sm flex">
                        <span class="px-3 inline-flex items-center text-sm">{{userStore.proveedor.Nombre}}</span>
                      </div>
                    </div>

                      <div>
                   <h1 class="text-center text-xl font-extrabold mt-2 tracking-tight sm:text-xl lg:text-xl">
                
                <span class="block text-sky-600">Publicidad</span>
              </h1>
              <div class="mr-4"> 
                         
    <ul role="list" class="mt-12 grid grid-cols-4">
    <li v-for="file in userStore.ofertas" :key="file.id" class="ml-1">
        <img :src="file.Image" alt="" class="border rounded-3xl">
        <button v-show="userStore.loadingSession" @click="userStore.deletePublic(file.id)"  class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-red hover:bg-sky-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>

                 
    </li>
  </ul>
                  </div>
                 
                  
                  </div>

                    <div>
                      <h1 class="block text-md font-medium text-gray-700">Sobre nosotros </h1>
                      <div class="mt-1">
                        <p class="mt-2 text-sm text-gray-500">{{userStore.proveedor.Informacion}}</p>
                       
                      </div>
                    </div>
                  </div>

                  <div class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                                       

                    <div class="hidden relative rounded-lg overflow-hidden lg:block">
                      <img v-if="(userStore.logo != undefined)" class=" rounded-lg w-40 h-40" :src= userStore.logo.Image alt="" />
                      
                     
                    </div>
                  </div>
                </div>


                  

                <div class="mt-6 grid grid-cols-12 gap-6">
                  <div class="col-span-12 sm:col-span-6">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Rif</label>
                        <span class=" py-2 px-3 mt-1 inline-flex items-center text-sm"> {{userStore.proveedor.RIF}}</span>
                   
                   
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Ubicacion</label>
                   <span class=" py-2 px-3 mt-1 inline-flex items-center text-sm"> {{userStore.proveedor.RIF}}</span>
                  </div>

                   <div class="col-span-12 sm:col-span-6">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Local</label>
                   <span class=" py-2 px-3 mt-1 inline-flex items-center text-sm"> {{userStore.local.numero}}</span>
                  </div>
                  

         

                  
                </div>

                <div class=" mt-4">
                    <label for="last-name" class="block text-sm mb-4 mt-2 font-medium text-gray-700">Categoria</label>
                <div id='example' class="grid grid-cols-2">
  <div v-for="cat in userStore.categories.data" :key="cat.id">
  <input type="checkbox" :id="cat.Nombre" :value="cat.id" v-model="userStore.checkedNames">
  <label>{{ cat.Nombre }}</label>
  </div>
  
</div>

                
   
                  </div>
              </div>

              
            </form>
            
          </div>
        </div>
      </div>


        
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

