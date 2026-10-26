import { createRouter, createWebHashHistory } from "vue-router";
import Casa from "../paginas/casa/Casa.vue";
import Primus from "../paginas/Simpson/Primus.vue";
import Responsum from "../paginas/indecision/Responsum.vue";
import Batman from "../paginas/Batman/Batman.vue";
import Circa from "@/paginas/Simpson/Circa.vue";
import Collectione from "@/paginas/Simpson/Collectione.vue";
import Character from "@/paginas/Simpson/Character.vue";
import Layout from "@/paginas/Simpson/Layout.vue";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/" ,
            name: "home",
            component: Casa
        },
        {
            path: "/Batman" ,
            name: "batman",
            component: Batman
        },
        {
            path: "/simpson" ,
            children:[
                {
                    path:"" ,  // simpson/
                    name:"simpsons",
                    component: Primus
                }, 
                {   path:"about", // simpson/about
                    component: Layout,
                    children: [
                        {
                            path:"",    // simpson/about/
                            component: Circa
                        }
                    ],
                },
                 {
                    path:"" ,  // simpson/
                    name:"simpsons-about",
                    component: Primus
                }, 
                {   
                    path:"gallery", // simpson/about
                    component: Layout,
                    children: [
                        {
                            path:"",    // simpson/about/
                            name:"simpsons-gallery",
                            component: Collectione
                        }
                    ]
                },
                {
                
                    path:":id",
                    name:"simpsons-detail",
                    component: Character
                },
            ],
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