<script lang="ts">
import { appStore } from '@/stores/appStore'
export default {
    data() {
        return {
            appStore: appStore(),
        }
    }
}
</script>
<template>
    <h1>Segunda Pagina</h1>
    <h3>{{ appStore.getParametroArmazenado }}</h3>

    <ul>
        <li v-if="Object.keys(appStore.getDadosCep).length !== 0" v-for="item in Object.keys(appStore.getDadosCep)">{{
            appStore.getDadosCep[item] }}</li>
    </ul>
</template>
<style></style>@/pinia/appStore