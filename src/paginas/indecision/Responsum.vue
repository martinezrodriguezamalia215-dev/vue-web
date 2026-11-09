<script setup lang="ts">
import { getYesNo, type YesNoTipus } from '@/actions/getYesNo.actio';
import { Loader, Loader2 } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const quaestio = history.state.quaestio as string || 'No hay pregunta';

const YesNo = ref<YesNoTipus>({
	answer: '',
	image: '',
});

const EstLoading = ref<boolean>(true);

onMounted(async () => {
	try {
		const responsum = await getYesNo();
			YesNo.value = responsum;
			EstLoading.value = false;
	} catch (error) {
		console.error('No va mi loco', error);
		EstLoading.value = false;
	}
})


</script>


<template>
   <div class="text-center"> 
	<div v-if="EstLoading">
		<img class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
		<div class="absolute w-screen h-screen top-0 left-0 bg-black opacity-40"></div>

		<div class="relative mt-[180px]">
			<p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p> 
			
			<div class="flex justify-center items-center mt-60">
				<Loader2 class="w-18 h-18  animate-spin text-white" />
			</div>

		</div>
	</div>

	<div v-else>
		<img v-if="YesNo.image === ''" class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
		<img v-else class="h-screen w-screen absolute top-0 left-0 object-cover" :src="YesNo.image" alt="" />
		<div class="relative mt-[180px]">
			<p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p> 
				<p class="text-6xl text-white font-bold mt-60 "> 
					{{ YesNo.answer === 'yes' ? 'Sí' : 'No!!' }}
				</p> 
			<button 
			class="fixed top-5 right-5 w-12 h-12 bg-gray-700 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-600 transition-colors"
			@click="router.push('/')"	
			>
				<span class="text-xl text-gray-300"> ➔ </span>
			</button>
		</div>
	</div>

	<!--  <img class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imagines/github.jpg" alt="" />
	<div class="absolute w-screen h-screen top-0 left-0 bg-black opacity-40"></div>

	<div class="relative mt-[180px]">
		<p class="text-4xl text-white font-medium mt-14">{{ quaestio }}</p> 
		<p class="text-6xl text-white font-bold mt-60 "> Sí </p> 
		<button 
        class="fixed top-5 right-5 w-12 h-12 bg-gray-700 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-600 transition-colors"
		@click="router.push('/')"	
        >
            <span class="text-xl text-gray-300"> ➔ </span>
		</button>
	</div>-->
</div>


</template>



<style scoped>

</style>

   

     
    
    
    
    
