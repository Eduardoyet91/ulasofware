<template>
  <TransitionRoot as="template" :show="userStore.addpubl">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="userStore.addpubl = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-gradient-to-r from-cyan-500 to-blue-500  border-white border shadow-blue-500 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
           
             <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 mb-6 text-center text-3xl font-extrabold text-white">Publicidad</h2>
           
    </div>
           
           
           
           
          
 <img v-show="userStore.ready" class=" rounded-lg mt-4 ml-1 w-full h-40" :src=userStore.image id="previa">
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Descripcion </label>
            <div class="mt-1">
           <input  @input="userStore.leerImagen($event)" ref="file" type="file" id="input-foto" class="appearance-none shadow-lg block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
          </div>
        
         

          

            
   
          

          <div class=" mt-4">
            <button v-show="!userStore.loadingPublici" @click="create" class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white  bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Guardar</button>
              <button v-show="userStore.loadingPublici" class="w-full flex justify-center  shadow-lg py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white  bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><Spin/></button>
             

          </div>
        

        <button  v-show="!userStore.loadingPublici" @click="userStore.addpubl = false" class="w-full mt-4 flex shadow-lg justify-center py-2 px-4 border border-whitet rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancelar</button>

            
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'

import {useUserStore} from '../stores/user'
import Spin from './spin.vue'

     
       

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Spin
  },

  
  setup() {
      const file = ref(null)
    

      const userStore = useUserStore();
       
   


const create = async() => {
            // Convierto la primera imagen del input en una ruta Base64
            
              userStore.createPublici(userStore.proveedor.id)       
        };     
  


      
    

    return {
     
      create, 
      file, 
      userStore
    }
  },
}
</script>