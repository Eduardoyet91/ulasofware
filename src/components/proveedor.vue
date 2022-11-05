<template>
    <div>
        <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          
        <div class="bg-white rounded-lg shadow overflow-hidden">
           
          <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            

            <form class="divide-y divide-gray-200 lg:col-span-9" @submit.prevent="update">
              <!-- Profile section -->
              <img v-if="(userStore.banner != undefined)" class="w-full mt-4 mr-4 h-40" :src= userStore.banner.Image alt="" />
              <div class="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg leading-6 font-medium text-gray-900">Perfil Proveedor</h2>
                  <p class="mt-1 text-sm text-gray-500">Informacion sobre el proveedor seleccionado.</p>
                </div>
               

                <div class="mt-6 flex flex-col lg:flex-row">
                  <div class="flex-grow space-y-6">
                    <div>
                      <label for="username" class="block text-sm font-medium text-gray-700"> Proveedor</label>
                      <div class="mt-1 rounded-md shadow-sm flex">
                        
                        <input v-model="userStore.proveedor.Nombre" type="text" name="username" id="username" autocomplete="username" class="focus:ring-sky-500 focus:border-sky-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"  />
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

        <button v-show="(file.id !== userStore.dato)" @click="userStore.deletePublic(file.id)"  class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-red hover:bg-sky-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
   <button v-show="(file.id == userStore.dato)" @click="userStore.deletePublic(file.id)"  class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-red hover:bg-sky-700">
<Spin/></button>


                 
    </li>
  </ul>
                  </div>
                 
                  
                  </div>

                    <div>
                      <label for="about" class="block text-sm font-medium text-gray-700"> Sobre Nosotros </label>
                      <div class="mt-1">
                        <textarea v-model="userStore.proveedor.Informacion" id="about" name="about" rows="3" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                      </div>
                      
                    </div>
                  </div>

                  <div class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                    <p class="text-sm font-medium text-gray-700" aria-hidden="true">Photo</p>
                    <div v-show="!userStore.agregar" class="mt-1 lg:hidden">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12" aria-hidden="true">
                           <img v-if="(userStore.logo != undefined)" class=" rounded-lg w-40 h-40" :src= userStore.logo.Image alt="" />
                        </div>
                        <div class="ml-5 rounded-md shadow-sm">
                          <div class="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                            <label for="mobile-user-photo" class="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none">
                              <span>Change</span>
                              
                            </label>
                            <input id="mobile-user-photo" name="user-photo" type="file" class="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div v-show="!userStore.agregar" class="hidden relative rounded-full overflow-hidden lg:block">
                       <img v-if="(userStore.logo != undefined)" class=" rounded-lg w-40 h-40" :src= userStore.logo.Image alt="" />
                      <label for="desktop-user-photo" class="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100">
                        <span>Change</span>
                        
                        <input type="file" id="desktop-user-photo" name="user-photo" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md" />
                      </label>
                    </div>
                  </div>
                </div>
                <div class="mt-6 grid grid-cols-12 gap-6">
                  <div class="col-span-12 sm:col-span-6">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Rif</label>
                    <input v-model="userStore.proveedor.RIF" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Ubicacion</label>
                    <input v-model="userStore.proveedor.Ubicacion" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                  </div>

                

                  <div class="col-span-12 sm:col-span-6">
                   <Listbox as="div" v-model="selected" class="placeholder: apliin">
      
    <ListboxLabel class="block text-sm font-medium text-gray-700">Locales disponibles </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <span class="ml-3 block truncate">{{selected}}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 -mt-12 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="local in userStore.disponibles" :key="local" :value="local" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-slate-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ local}}
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
                  </div>
 
</div> 
                  <div class=" mt-4">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Categoria</label>
                <div id='example' class="grid grid-cols-2">
  <div v-for="cat in userStore.categories.data" :key="cat.id">
  <input type="checkbox" :id="cat.Nombre" :value="cat.id" v-model="userStore.checkedNames">
  <label>{{ cat.Nombre }}</label>
  </div>
  
</div>

                
   
                  </div>

                <div class="mt-6 grid grid-cols-12 gap-6"> 

              
                  <div class="col-span-12 sm:col-span-12">
                    <div v-show="(userStore.agregar && !userStore.saved)"   class=" mt-4">
                         <button v-show="!userStore.loadingSaved" @submit.prevent="update" class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white  bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Guardar</button>
                         <button v-show="userStore.loadingSaved" class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white  bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><Spin/></button>
                       

          </div>
           <div v-show="(!userStore.agregar || userStore.saved)"  class=" mt-4">
                         <button v-show="!userStore.loadingSaved" @click="userStore.actual = true" class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white  bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Actualizar</button>
 <button v-show="userStore.loadingSaved" class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white  bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><Spin/></button>

          </div>
         
                
                  </div>
                </div>
              </div>

              
            </form>
            

           
            <aside class="py-6 lg:col-span-3">
              <nav class="space-y-1">
                <h1 class="ml-12 text-2xl">Modificar</h1>
                <button @click="userStore.editar = true,userStore.change = false,userStore.ofer = false" :class="[((userStore.editar && !userStore.change) && !userStore.ofer) ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group border-l-4 px-3 py-2 flex items-center text-sm font-medium']" >
                  
                  <span class="truncate">
                    Editar Detalles
                  </span>
                </button>
                 <button v-show="(!userStore.agregar || userStore.saved)" @click="userStore.editar = false,userStore.change = true,userStore.ofer = false,userStore.addpubl = true,userStore.ready = false"  :class="[((!userStore.editar && userStore.change) && !userStore.ofer) ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group border-l-4 px-3 py-2 flex items-center text-sm font-medium']" >
                  
                  <span class="truncate">
                    Cambiar Logo
                  </span>
                </button>
                 <button v-show="(!userStore.agregar || userStore.saved)" @click="userStore.editar = false,userStore.change = false,userStore.ofer = false,userStore.addpubl = true,userStore.ready = false"  :class="[((!userStore.editar && !userStore.change) && !userStore.ofer) ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group border-l-4 px-3 py-2 flex items-center text-sm font-medium']" >
                  
                  <span class="truncate">
                    Cambiar Banner
                  </span>
                </button>
                 <button v-show="(!userStore.agregar || userStore.saved)" @click="userStore.editar = false,userStore.change = false,userStore.ofer = true,userStore.addpubl = true,userStore.ready = false"  :class="[((!userStore.editar && !userStore.change) && userStore.ofer) ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group border-l-4 px-3 py-2 flex items-center text-sm font-medium']" >
                  
                  <span class="truncate">
                    Agregar Publicidad
                  </span>
                </button>
                 
              </nav>
            </aside>
          </div>
        </div>
      </div>

<AddPubl/> 
        
    </div>
</template>
<script>
import { ref } from 'vue'
import {useUserStore} from '../stores/user'
import AddPubl from '../components/addpublicidad.vue'
import Spin from '../components/spin.vue'

import {
    TransitionChild,
     TransitionRoot ,
     Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

import {
  SelectorIcon
} from '@heroicons/vue/outline'






export default {
  components: {
    
    TransitionChild,
     TransitionRoot ,
     Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
    SelectorIcon, 
    AddPubl,
    Spin 
   
  },
  setup() {
  
    const userStore = useUserStore()
    const selected = ref(userStore.disponibles[0])

    const update = () => {
if(userStore.actual){
  console.log('actual')
userStore.updateProveedor(selected)
}

else{
  console.log('update')
   userStore.createProveedor(selected)
}
     
     

    }

  
    
  

    return {
      update,
      selected,
      userStore,
      
     
    }
  },
}
</script>