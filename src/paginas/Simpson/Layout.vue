<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';
import { RouterView } from 'vue-router';




</script>

<template>
    <div class="grid grid-rows-[auto_1dr_auto] min-h-screen">
       
       <header class="bg-simpsons-yellow w-full border border-black">

          <div class="flex flex-col items-center mb:flex-row p-3 md:px-20 mx-auto max-w-page">
          
            <LogoSimpsons estilus="w-[8rem] h-auto" />
           
            <div class="flex gap-6 pt-3">
                <RouterLink 
                    to ="/Simpson/gallery" 
                    active-class="font-bold text-blue-500 "
                >
                    Character
                </RouterLink>

                <RouterLink 
                    to ="/Simpson/about"
                    active-class="font-bold text-blue-500 "
                >
                    About
                </RouterLink>

            <Button variant="terciarius" size="elongatis">
                <RouterLink to="/Simpson"> Exit </RouterLink>
            </Button>
            </div>

          </div> 

         
       </header>
       
       <main>
            <RouterView />
       </main>

       <footer class="bg-simpsons-yellow w-full border border-black text-center py-6">
            <div>
                <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2023
            </div>

              <small>
                This app was done by Amalia Martínez
              </small>
       
       </footer>

    </div>
</template>


<style scoped>

</style>