
<template>
  <div>
    <Disclosure as="div" class=" bg-gradient-to-b from-sky-800  pb-32 overflow-hidden" v-slot="{ open }">
      <nav :class="[open ? 'bg-sky-900' : 'bg-gradient-to-b from-sky-800 ', 'relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none']">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div class="relative h-16 flex items-center justify-between lg:border-b lg:border-sky-800">
            <div class="px-2 flex items-center lg:px-0">
              <div class="flex-shrink-0">
                <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-teal-400.svg" alt="Workflow" />
              </div>
            
              
            </div>
            
         
           
            <div class="hidden lg:block lg:ml-4">
              <div class="flex items-center gap-4">
                <h1 class="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white  sm:px-8">Servicio tecnico </h1>

                  <button class="flex items-center justify-center px-2 py-2 border border-white text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 sm:px-8">Iniciar sesion </button>

                

                <!-- Profile dropdown -->
                
              </div>
            </div>
          </div>
        </div>

        
      </nav>
  
    
    </Disclosure>

    <main class="relative -mt-32">
       <div class="relative">
        <div class="inset-x-0 bottom-0" />
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="px-3 py-10 sm:px-6 sm:py-16  bg-gradient-to-r from-sky-400 to-indigo-400 lg:py-20 lg:px-6">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">Bienvenido a tu</span>
                <span class="block text-sky-600">Centro Comercial</span>
              </h1>
              <p class="mt-6 mb-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">Encuentra tu producto o servivio</p>
               <div class="flex-1 px-2 flex  justify-center lg:ml-6 lg:justify-center">
              <div class="max-w-lg w-full lg:w-full">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-sky-100 focus-within:text-gray-400">
                  <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  </div>
                  <input id="search" name="search" class="block w-full h-10 bg-blue-500 bg-opacity-50 py-2 pl-10 pr-3 border border-white rounded-md leading-5 placeholder-sky-300 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm" placeholder="¿Que estas buscando?" type="search" />
                </div>
              </div>
            </div>
            <Cat/>
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div  class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                 <!-- <button class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">Buscar </button>-->
                  
                  <router-link  to="/home" class="flex items-center justify-center px-4 py-2 border border-white text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 sm:px-8">Buscar </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </main>
  </div>

</template>

<script>
import { ref } from 'vue'
import Cat from '../components/categories.vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue'
import { SearchIcon } from '@heroicons/vue/solid'
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/vue/outline'

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Applicants', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
]
const subNavigation = [
  { name: 'Profile', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
    Cat
  },
  setup() {
    const availableToHire = ref(true)
    const privateAccount = ref(false)
    const allowCommenting = ref(true)
    const allowMentions = ref(true)

    return {
      user,
      navigation,
      subNavigation,
      userNavigation,
      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
    }
  },
}
</script>




