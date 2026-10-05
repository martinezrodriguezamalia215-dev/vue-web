<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router';
</script>

<template>
    
     <div class="bg-domus-navy h-screen w-screen text-white font-serif text-center flex flex-col items-center gap-10 fixed overflow-hidden">
      <img class="absolute opacity-20" src="/imagines/tonitrui.png"/>
      <h1 class="text-5xl md:text-7xl lg:text-9xl font-bold pb-15 transition-all z-10">
        <span class="text-domus-cyan">Diseño </span>Web y 
        <br>
        Apps <span class="text-domus-cyan">Interactivas</span>
      </h1>

      <p class="text-lg md:text-2xl transition">
        Aprendiendo a crear aplicaciones web.
      </p>

        <div class="z-10">
          <Button variant="domus" class="mr-2">
            <RouterLink to="/indecision">Si o no </RouterLink>
          </Button>

          <Button variant="domus" class="mr-2">
            <RouterLink to="/Batman">Batman </RouterLink>
          </Button>

          <Button variant="domus" class="mr-2">
            <RouterLink to="/Simpson">Simpson </RouterLink>
          </Button>

          <Button variant="domus" class="mr-2">
            <a href="http://www.upv.es">UPV</a>
          </Button>

          
          
    
    
    
       </div>

    
  </div>
</template>

<style scoped></style>