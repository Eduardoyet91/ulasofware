<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-transparent shadow-lg overflow-hidden sm:rounded-md ">
    <ul role="list">
      <li v-for="result in userStore.result" :key="result.id" class="gap-4 mt-2">
        <a href="/#/perfil" class="block hover:bg-gray-50 rounded-md shadow-lg border bg-white">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-indigo-600 truncate">{{ result.Nombre }}</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <MailIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="truncate">{{ result.Ubicacion }}</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                  
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { CheckCircleIcon, ChevronRightIcon} from '@heroicons/vue/solid'
import {useUserStore} from '../stores/user'



export default {
  components: {
    CheckCircleIcon,
    ChevronRightIcon,
   
  },
  setup() {
    const userStore = useUserStore()
    return {
      userStore,
      
    }
  },
}
</script>