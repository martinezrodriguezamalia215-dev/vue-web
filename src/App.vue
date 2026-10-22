<script setup lang="ts">
import { Toaster as SoonerToaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'


</script>

<template>
 <main>
    <RouterView />

      <SoonerToaster />

  </main>
</template>
