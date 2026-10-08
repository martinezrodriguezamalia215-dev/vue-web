<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay' 

interface Props {
  photos: string[];
  basePath: string 
  autoplayDelay?: number
  loop?: boolean
  dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplayDelay: 2000,
  loop: true,
})

</script>

<template>
    <Carousel 
   :plugins="[Autoplay({
      delay: 2000,
    })]"
    class="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-gray-900 "
    :opts="{
      loop:props.loop ,
      dragFree:true
    
    }">
    <CarouselContent >
      <CarouselItem v-for="(photo, i) in photos" :key="i">
        <div class="p-1">
          <Card class="bg-yellow-200 border-0">
            <CardContent class="flex aspect-6/4 items-center justify-center p-6">
              <img
                :src="`${props.basePath}/${photo}.jpg`"
                class="w-full h-full object-cover "
              
               />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden md-flex items-center bg-gray-900 text-white" />
    <CarouselNext  class="hidden md:flex justify-center bg-gray-900 text-white"  />
  </Carousel>

</template>


<style scoped>

</style>