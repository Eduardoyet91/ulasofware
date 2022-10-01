<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="bg-transparent">
   
    

    <!-- Filters -->
    <section aria-labelledby="filter-heading">
      <h2 id="filter-heading" class="sr-only">Filters</h2>

     

      <!-- Active filters -->
      <div class="bg-transparent relative grid">

          
        <div class="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
         
         <div class="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-1 lg:px-8">
          

          <button type="button" class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden" @click="open = true">Filters</button>

          <div class="hidden sm:block">
            <div class="flow-root">
              <PopoverGroup class="-mx-4 flex items-center ">
                <Popover v-for="(section, sectionIdx) in filters" :key="section.name" class="px-4 relative inline-block text-left">
                  <PopoverButton class="group inline-flex justify-center text-sm font-medium text-white hover:text-gray-900">
                    <span class="text-white">{{ section.name }}</span>
                    <span v-if="sectionIdx === 0" class="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">1</span>
                    <ChevronDownIcon class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  </PopoverButton>

                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <PopoverPanel class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form class="space-y-4">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                          <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" :checked="option.checked" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                          <label :for="`filter-${section.id}-${optionIdx}`" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {{ option.label }}
                          </label>
                        </div>
                      </form>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </PopoverGroup>
            </div>
          </div>
        </div>
          <h3 class="text-xs font-semibold uppercase tracking-wide text-white">
            Filters
            <span class="sr-only">, active</span>
          </h3>
          

          <div aria-hidden="true" class="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4" />

          <div class="mt-2 sm:mt-0 sm:ml-4">
            <div class="-m-1 flex flex-wrap items-center">
              <span v-for="activeFilter in activeFilters" :key="activeFilter.value" class="m-1 inline-flex rounded-full  items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
                <span>{{ activeFilter.label }}</span>
                <button type="button" class="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500">
                  <span class="sr-only">Remove filter for {{ activeFilter.label }}</span>
                  <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'


const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: true },
    ],
  },
 
]
const activeFilters = [{ value: 'objects', label: 'Objects' }]

export default {
  components: {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    ChevronDownIcon,
    XIcon,
  },
  setup() {
    const open = ref(false)

    return {
      filters,
      activeFilters,
      open,
    }
  },
}
</script>