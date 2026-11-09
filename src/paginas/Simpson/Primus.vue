<script setup lang="ts">
import  Button  from '@/components/ui/button/Button.vue';
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import { Heart } from '@lucide/vue';
import { useFavoritos } from '@/stores/useFavoritos';
import { storeToRefs } from 'pinia';

const favoritosStore = useFavoritos()
const {totalFavoritos} = storeToRefs(favoritosStore)



</script>

<template>
    
<div class="bg-simpsons-yellow min-h-screen text-center p-4 flex flex-col items-center justify-center">
	
    <LogoSimpsons estilus="w-[24rem] sm:w-[35rem]"/>
    
    <h1 class="text-xl my-1 font-medium">
    	Discover some of the most amazing Quotes from The Simpsons
	</h1>
	<div>
    	<strong>This is an unofficial app (even though it looks so cool!)</strong>
	</div>
    <div class="mt-8 flex gap-5">
    	<Button variant="terciarius" size="elongatis" >
      		<RouterLink to="/">Exit</RouterLink>
    	</Button>
    	<Button variant="terciarius" size="elongatis">
      		<RouterLink to="/Simpson/about"> Enter </RouterLink>
    	</Button>

	<div class="flex item-center gap-2 text-black pl-4">
		<Heart class="w-7 h-7 fill-simpsons-red text-simpsons-red"/>
		<span class="font-bold text-2xl">
			{{ favoritosStore.totalFavoritos}}
		
		</span>

	</div>



    </div>

        <div class="flex gap-12">
    
            <img class="object-contain hidden md:block"    src="/imagines/simpsons/bart.png"  width="200px" />

            <img class="object-contain hidden md:block mt-20"    src="/imagines/simpsons/homer.png"  width="200px" />

            <img class="object-contain mt-12 md:mt-0"    src="/imagines/simpsons/moe.png"  width="200px" />
    

    
    </div>
</div >





</template>

