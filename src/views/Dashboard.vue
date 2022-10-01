
<template>
  <div>
    <Navbar/>

    <main class="relative -mt-48 mr-8 ml-8">
      <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-center">
              <div class="max-w-lg w-full lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-sky-100 focus-within:text-gray-400">
                  <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  </div>
                  <input id="search" name="search" class="block w-full bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 border border-white rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm" placeholder="Search" type="search" />
                </div>
              </div>
            </div>
            <Cat/>
             <div class="flex-1 px-2 flex mb-8 justify-center lg:ml-6 lg:justify-center">
             <button @click="userStore.currentUser()"  class="flex items-center justify-center px-4 py-2 border border-white text-base font-medium rounded-md shadow-sm text-white  bg-sky-600 hover:bg-sky-700 sm:px-8">Buscar </button>
 </div>
            
      
      <List v-show="userStore.result"/>
      <Empty v-show="!userStore.result"/>
     
      
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
    Cat,
    List,
    Empty,
    Proveedor,
    Proveedorper,
     Login,
     Navbar
  },
  setup() {
    const availableToHire = ref(true)
    const privateAccount = ref(false)
    const allowCommenting = ref(true)
    const allowMentions = ref(true)
    const userStore = useUserStore()

    return {
      user,
      navigation,
      subNavigation,
      userNavigation,
      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
      userStore
    }
  },
}
</script>




    