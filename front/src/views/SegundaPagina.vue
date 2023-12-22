<script lang="ts">
import { appStore } from '@/stores/appStore'
export default{
        data(){
            return {
                appStore : appStore() , 
            }
        }
    }
</script>
<template>
    <h1>Segunda Pagina</h1>
    <h3>{{ appStore.getParametroArmazenado }}</h3>
</template>
<style>

</style>