<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-transparent shadow-lg overflow-hidden sm:rounded-md ">
    <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Proveedores</span>
              </h1>
    <ul class="mt-4" role="list">
      <li v-for="result in userStore.result" :key="result.id" class="gap-4 mt-2">
        <div class="block hover:bg-gray-50 grid grid-cols-7 rounded-md shadow-lg border bg-white">
        <a href="/#/perfil" @click="userStore.getProvbyid(result.id)" class="col-span-6" >
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm flex font-medium text-indigo-600 truncate"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

{{ result.Nombre }}</p>
                </div>
                <div class="hidden md:block">
                  <div>
                  
                     <p class="mt-2 flex items-center text-sm text-gray-500">
                    
                    <span class="truncate flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>
{{ result.Ubicacion }}</span>
                  </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </a>
        <div v-show="userStore.loadingSession" class="flex justify-center">
              <button v-show="(result.id !== userStore.dato)"  @click="userStore.deleteProveedor(result.id)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 mt-2 text-red-400">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
</svg>
</button>

<button v-show="(result.id == userStore.dato)">
              <Spin/>
</button>
              
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import {useUserStore} from '../stores/user'
import Spin from './spin.vue'



export default {
  components: {
    
    Spin
   
  },
  setup() {
    const userStore = useUserStore()
    return {
      userStore,
      
    }
  },
}
</script>