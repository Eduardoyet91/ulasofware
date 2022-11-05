
<template>
  <div>
    <Navbar/>

    <main class="relative grid grid-cols-3 -mt-48 mr-4 ml-4">
    
     <div>
        <div class="grid mt-8 px-2 flex justify-center lg:ml-6 lg:justify-center">
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

              <div class="grid grid-cols-2 mt-8 w-full lg:max-w-xs">
               
                
                      <div class="flex-1 px-2 flex justify-center lg:ml-0 lg:justify-center">
             <button @click="change"  class="flex mt-1 items-center justify-center px-4 py-2 border border-white text-xs font-medium rounded-md shadow-sm text-white  bg-sky-600 hover:bg-sky-700 sm:px-8">Proveedores </button>
 </div>
 
                 <div class="flex-1 px-2 flex justify-center lg:ml-0 lg:justify-center">
             <button @click="userStore.getCat(),userStore.getC = true" class="flex mt-1 items-center justify-center px-2 py-1 border border-white text-xs font-medium rounded-md shadow-sm text-white  bg-sky-600 hover:bg-sky-700 sm:px-8">Categorias</button>
 </div>
               
                
              </div>
              <div class="flex-1 px-2 flex justify-center lg:ml-0 lg:justify-center">
             <router-link to="/perfil" @click="nuevo" class="flex mt-4 items-center justify-center px-4 py-2 border border-white text-xs font-medium rounded-md shadow-sm text-white  bg-sky-600 hover:bg-sky-700 sm:px-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mr-2 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

 Proveedor</router-link>
 </div>
               <div class="flex-1 px-2 flex justify-center lg:ml-0 lg:justify-center">
             <button @click="userStore.addcat = true"   class="flex mt-4 items-center justify-center px-4 py-2 border border-white text-xs font-medium rounded-md shadow-sm text-white  bg-sky-600 hover:bg-sky-700 sm:px-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mr-2 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg> Categoria </button>
 </div>
             
            </div>
     </div>
      <div class="col-span-2">
       <div v-show="((userStore.result.length === 0) && (!userStore.getC && !userStore.loadingBig))" class="relative mt-4">
        <div class="inset-x-0 bottom-0" />
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="px-3 py-10 sm:px-6 sm:py-16  bg-gradient-to-r from-sky-400 to-indigo-400 lg:py-20 lg:px-6">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Bienvenido</span>
                <span class="block text-sky-600">Soporte Tecnico</span>
              </h1>
              <p class="mt-6 mb-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">Administracion de la Aplicacion</p>
               
            <Empty class="-mt-6" v-show="((userStore.result.length === 0) && (!userStore.getC && !userStore.loadingBig))"/>
             
              
            </div>
          </div>
        </div>
      </div>
      <List class="mt-12" v-show="(!(userStore.result.length === 0) && (!userStore.getC && !userStore.loadingBig))"/>
      <Clist class="mt-12"  v-show="(userStore.getC && !userStore.loadingBig)"/>
      <Loading class="mt-12" v-show="userStore.loadingBig"/>
      
      </div>
            
       
 
            
      
      

      
      <AddCat />
      <AddPubli/> 


     
      
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
import Clist from '../components/listCate.vue'
import AddCat from '../components/addCate.vue'
import AddPubli from '../components/addpublicidad.vue'

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
     Loading,
     Clist,
     AddCat,
     AddPubli 
  },
  setup() {
    
    const userStore = useUserStore()
    const change = () => {
      userStore.agregar = false
     

      userStore.getC = false,
      userStore.result = userStore.proveedores.data


    }

    const nuevo = () => {
      userStore.getlocales()
      userStore.agregar = true
      userStore.proveedor = []
      userStore.checkedNames = []
      userStore.local = ""
      userStore.logo = ""
      userStore.banner = undefined
      userStore.ofertas = []
      userStore.saved = false
      userStore.actual = false


    }

    return {
          userStore,
          change,
          nuevo
    }
  },
}
</script>




    