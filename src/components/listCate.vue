<template>
  <div class="bg-transparent mt-8 overflow-hidden sm:rounded-md ">
    <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Categorias</span>
              </h1>
    <ul role="list" class="grid grid-cols-1 mt-4 ml-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="filtro in userStore.categories.data" :key="filtro.id" class="bg-white rounded-lg shadow">
        <a href="/#/perfil" class="hover:bg-gray-50 rounded-md shadow-lg border bg-white">
          <div class=" px-2 sm:px-2">
                  <p class="text-sm text-center flex font-medium text-indigo-600 truncate"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>{{ filtro.Nombre }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
  
</template>

<script>

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