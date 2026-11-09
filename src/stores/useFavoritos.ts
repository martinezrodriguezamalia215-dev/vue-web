import { characters, type Character } from "@/paginas/Simpson/data";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavoritos = defineStore("Favoritos", () => {
    const favoritos = ref <Character[]>([
        characters.find(character => character.id === 12) !,
        characters.find(character => character.id === 22) !,
        characters.find(character => character.id === 7) !,
        
    ])

    return {
        favoritos,
        totalFavoritos: computed(() => favoritos.value.length),
    }


})  