<template>
    <div>
        <Disclosure as="div" class="relative bg-gradient-to-b from-sky-800  pb-32 overflow-hidden" v-slot="{ open }">
      <nav :class="[open ? 'bg-gradient-to-b from-sky-800 ' : 'bg-transparent', 'relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none']">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div class="relative h-16 flex items-center justify-between lg:border-b lg:border-sky-800">
            <div class="px-2 flex items-center lg:px-0">
              <div class="flex-shrink-0">
                <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-teal-400.svg" alt="Workflow" />
              </div>
              <div class="ml-8">
               

                
                <router-link v-show="!userStore.loadingSession"  :to="'/' " @click="userStore.result=false" class="bg-sky-700 hover:bg-sky-400 px-3 py-2  rounded-md text-sm font-medium text-white bg-opacity-50" >Inicio</router-link> 
              <router-link v-show="userStore.loadingSession" :to="'/soporte' " @click="userStore.result= [],userStore.getC = false,userStore.loadingBig = false" class="bg-sky-700 hover:bg-sky-400 px-3 py-2  rounded-md text-sm font-medium text-white bg-opacity-50" >Inicio</router-link> 
                
               
        
                
                
              </div>
            </div>
         
           
            <div class="hidden lg:block lg:ml-4">
              <div class="flex items-center">
               

                <!-- Profile dropdown -->
                <Menu as="div" class="relative flex-shrink-0 ml-4">
                  <div>
                     <div v-show="!userStore.loadingSession" class="flex items-center gap-4">
                <h1 class="flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white  sm:px-8">Servicio tecnico </h1>

                  <button @click="userStore.open=true" class="flex items-center justify-center px-3 py-2 border border-white text-xs font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 sm:px-8">Iniciar sesion </button>

                

                <!-- Profile dropdown -->
                
              </div>
               <div v-show="userStore.loadingSession" class="flex items-center gap-4">
               

                  <button @click="userStore.logout()" class="flex items-center justify-center px-4 py-2 border border-white text-xs font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700  sm:px-8">Cerrar sesion </button>
                  <button @click="userStore.register=true" class="flex items-center justify-center px-4 py-2 border border-white text-xs font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700  sm:px-8">Registrar </button>

                

                <!-- Profile dropdown -->
                
              </div>
                  </div>
                  
                </Menu>
              </div>
            </div>
          </div>
        </div>

        
      </nav>
     
      <header class=" relative py-10">
          
      </header>
    </Disclosure>
        
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
import {
  Disclosure,
  Menu,
} from '@headlessui/vue'




export default {
  components: {
    Disclosure,
    Menu,
    Cat,
    List,
    Empty,
    Proveedor,
    Proveedorper,
     Login,
  },
  setup() {
    
    const userStore = useUserStore()

    return {
     
      userStore
    }
  },
}
</script>