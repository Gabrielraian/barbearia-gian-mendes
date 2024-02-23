<script lang="ts">
import { appStore } from '@/stores/appStore'
export default {
    data() {
        return {
            appStore: appStore()
        }
    }
}
</script> 

<template>
    <h1>Pagina Home</h1>
    <h5>{{ appStore.getParametroArmazenado }}</h5>

    <ul>
        <li v-if="Object.keys(appStore.getDadosCep).length !== 0" v-for="item in Object.keys(appStore.getDadosCep)">{{
            appStore.getDadosCep[item] }}</li>
    </ul>
</template>
<style></style>