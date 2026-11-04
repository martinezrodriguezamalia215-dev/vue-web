<script setup lang="ts">
import {Card,CardContent } from '@/components/ui/card'
import { computed, ref } from 'vue'
import {characters, type  Character } from './data'

const inPagina = 6

const nuncPagina = ref(1)

const totalPaginae = Math.ceil(characters.length / inPagina)

const listaSimpson = computed(() => {
  const inicio = (nuncPagina.value - 1) * inPagina
  const fin = inicio + inPagina
  return characters.slice(inicio, fin)
})

const ireAdPagina = (pagina: number) => {
  if (pagina >= 1 && pagina <= totalPaginae) {
    nuncPagina.value = pagina
  }
}

const paginaNumeri: number[] = [...Array(totalPaginae).keys()].map(i => i + 1)


</script>


<template>
    <div class="flex flex-col items-center justify-center gap-8 w-full max-w-page my-8 mx-auto">
        <div class="text-center  ">
            <h1 class=" font-bold text-xl lg:text-5xl mb-5"
              >Simpson Quote App
            </h1>
              <p class="mb-5 ">Click onb the quote at your favorite character</p>
        </div> 

    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto ">
    
          <Card
              class="cursor-pointer w-[220px] h-240px] hover:bg-simpsons-red hover:text-white transition-colors"
              v-for="characters in listaSimpson"
              :key="characters.id"
              >
            <CardContent class="flex flex-col items-center gap-1 w-full px-0">
              <img 
              :src="`/imagines/simpsons/${characters.imago}`" 
              class="w-48 h-42 object-cover object-top mt-2 bg-simpsons-yellow border-black rounded-t-md"
            />
              <h2 class="font-medium text-lg ">{{ characters.nomen }}</h2>
            </CardContent>
          </Card>     
    </div>

    <div class="flex items-center justify-center gap-2 mt-4">
  <button
    
    @click="ireAdPagina(nuncPagina - 1)"
    :disabled="nuncPagina === 1"
    :class="[
      'px-4 py-2 rounded-md font-medium transition-colors',
      nuncPagina === 1
      ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
      : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white'
    ]"
  >
    Anterior
  </button>

  <button
    v-for="pagina in paginaNumeri"
    :key="pagina"
    @click="ireAdPagina(pagina)"
    :class="[
      'w-10 h-10 rounded-md font-medium transition-colors',
      nuncPagina === pagina 
      ? 'bg-simpsons-red text-white' 
      : 'bg-simpsons-yellow text-black'
    ]"
  >
    {{ pagina }}
  </button>

  <button
  @click="ireAdPagina(nuncPagina + 1)"
    :disabled="nuncPagina === totalPaginae"
    :class="[
      'px-4 py-2 rounded-md font-medium transition-colors',
      nuncPagina === totalPaginae
      ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
      : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white'
    ]"
  >
    Siguiente
  </button>
</div>
     
    </div>



</template>



<style scoped>

</style>