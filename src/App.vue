<template>
<div>
    <router-view class="min-h-full"></router-view>  
    <Login/>
    <Register/>
    </div>

</template>

<script setup>
import {useUserStore} from './stores/user'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from './components/login.vue'
import Register from './components/register.vue'



const userStore = useUserStore()
const auth = getAuth();






</script>