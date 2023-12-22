<script lang="ts">
import { appStore } from '@/stores/appStore'
    export default{
        data(){
            return{
                appStore : appStore()
            }
        }
    }
</script> 

<template>
    <h1>Pagina Home</h1>
    <h5>{{ appStore.getParametroArmazenado }}</h5>
</template>
<style>

</style>