<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router';
</script>

<template>
    
     <div class="fondo-home">

      <h1>
      <span>Diseño </span>Web y 
      <br>
      apps <span>Interactivas</span>
      </h1>

        <div class="botones">
          <Button>
            <RouterLink to="/indecision">Si o no </RouterLink>
          </Button>

          <Button>
            <RouterLink to="/batman">batman </RouterLink>
          </Button>

          <Button>
            <RouterLink to="/Simpson">Simpson </RouterLink>
          </Button>

          <Button>
            <a href="http://www.upv.es">UPV</a>
          </Button>

          
          
    
    
    
       </div>

    
  </div>
</template>

<style scoped>


h1 {
  color: #a370c9;
  font-size: 3rem;
}

.fondo-home {
  background-color: rgb(92, 48, 111);
  height: 100vh;
  color: rgb(198, 162, 226);
}


.botones > * {
  margin-right: 0.5rem;
  background-color: rgb(151, 163, 80);
} 


.botones > Button:hover {
  background-color: rgba(rgb(83, 57, 17));

} 

</style>