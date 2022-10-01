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
                        <span class="px-3 inline-flex items-center text-sm"> Ivoo</span>
                      </div>
                    </div>

                    <div>
                      <h1 class="block text-md font-medium text-gray-700">Sobre nosotros </h1>
                      <div class="mt-1">
                        <p class="mt-2 text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus totam vitae voluptate porro tenetur quam repellendus atque tempora iusto tempore esse, dolores, exercitationem voluptas, suscipit itaque veritatis. Minima, voluptates voluptatibus!.</p>
                       
                      </div>
                      <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                    </div>
                  </div>

                  <div class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                                       

                    <div class="hidden relative rounded-lg overflow-hidden lg:block">
                      <img class=" rounded-lg w-40 h-40" src="../assets/Movistar2.png" alt="" />
                     
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-12 gap-6">
                  <div class="col-span-12 sm:col-span-6">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Rif</label>
                        <span class=" py-2 px-3 mt-1 inline-flex items-center text-sm"> workcation.com/ </span>
                   
                   
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Ubicacion</label>
                   <span class=" py-2 px-3 mt-1 inline-flex items-center text-sm"> workcation.com/ </span>
                  </div>

         

                  <div class="col-span-12  sm:col-span-12">
                    <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
                    <div class="grid grid-cols-2">
                        <div class="mr-4"> 
    <ul role="list" class="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    <li v-for="file in files" :key="file.source" class="relative">
      <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img :src="file.source" alt=""  />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for {{ file.title }}</span>
        </button>
      </div>
      <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ file.title }}</p>
      <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ file.size }}</p>
    </li>
  </ul>
                  </div>
                  <div class="m-8">
                     <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="border rounded-3xl">
                  </div>
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
  
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const files = [
  {
    title: 'Comida',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Comida',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Comida',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Comida',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Comida',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  // More files...
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
   
  },
  setup() {
    const availableToHire = ref(true)
    const privateAccount = ref(false)
    const allowCommenting = ref(true)
    const allowMentions = ref(true)

    return {
      user,
      files,
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

