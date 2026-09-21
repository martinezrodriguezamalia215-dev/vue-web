import { createRouter, createWebHashHistory } from "vue-router";
import Casa from "../paginas/casa/Casa.vue";
import Ironman from "../paginas/Ironman/Ironman.vue";
import Primus from "../paginas/Simpson/Primus.vue";
import Responsum from "../paginas/indecision/Responsum.vue";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/" ,
            name: "home",
            component: Casa
        },
        {
            path: "/Ironman" ,
            name: "ironman",
            component: Ironman
        },
        {
            path: "/Simpson" ,
            name: "simpson",
            component: Primus
        },
        {
            path: "/indecision" ,
            name: "indecision",
            component: Responsum
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
})