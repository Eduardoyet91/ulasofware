import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "./stores/user";


import Start from "./views/Start.vue";

import Dashboard from "./views/Dashboard.vue";
import Perfil from "./views/perfil.vue";

const requireAuth = async() => {
    const userStore = useUserStore();
    userStore.getCat()
    userStore.getProv()

    const user = await userStore.currentUser();
    if (user) {
        userStore.loadingSession = true;
    } else {
        userStore.loadingSession = false;
    }

}



const routes = [


    { path: "/", component: Start, beforeEnter: requireAuth },

    { path: "/home", component: Dashboard, beforeEnter: requireAuth },

    { path: "/perfil", component: Perfil, beforeEnter: requireAuth }



];


const router = createRouter({
    routes,
    history: createWebHashHistory(),

});

export default router;