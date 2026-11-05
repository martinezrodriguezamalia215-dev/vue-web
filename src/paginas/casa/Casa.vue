<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink, useRouter } from 'vue-router';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ref } from 'vue';

const dialogApertaEst = ref<boolean>(false)
const quaestio = ref<string>('')

const router = useRouter();
const cumKeyPressumEnter = (eventus: KeyboardEvent) => {
  if (eventus.key === 'Enter') {
    const textusItinerans = quaestio.value.trim();
    if (textusItinerans.length > 0 && textusItinerans.endsWith('?')) {
      dialogApertaEst.value = false;
      router.push({ 
        path: '/indecision',
        state: { quaestio: textusItinerans },
      });
    }
  }
};

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
          <!-- <Button variant="domus" class="mr-2"> -->
            <!-- <RouterLink to="/indecision">Si o no </RouterLink> -->
          <!-- </Button> -->
            <Dialog 
            :open="dialogApertaEst"
            @update:open="dialogApertaEst = $event"
            >
              
                <DialogTrigger as-child>
                    <Button variant="domus" class="mr-2">
                        Si o no
                    </Button>
                </DialogTrigger>

                <DialogContent class="sm:max-w-[425px] bg-domus-navy text-white border-domus-cyan border-2">
                  <DialogHeader>
                    <DialogTitle class="text-white">Pregúntame</DialogTitle>
                    <DialogDescription class="text-gray-400">
                      No sigas con tus dudas, yo te responderé SI o NO.
                    </DialogDescription>
                  </DialogHeader>
                    <div class="mrt-4">
                      <Input 
                        class = "bg-domus-navy-input text-white placeholder:text.gray-400 border-domus-cyan" 
                        type="text" placeholder="Escribe tu pregunta aquí..."
                        v-model="quaestio"
                        @keydown="cumKeyPressumEnter"
                      />
                    
                    </div>
                
                
                </DialogContent>
              
              </Dialog>



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