<script lang="ts">
import CardComponent from '@/components/PrimeiraPagina/CardComponent.vue';
import { appStore } from '@/stores/appStore'

export default {
    data() {
        return {
            inputText: null,
            //Define-se o appStore nos imports com os { } pois foi exportado como variável e não export default.
            appStore: appStore(),
        }
    },
    components: {
        CardComponent
    }
}
</script>
<template>
    <p class="redBar">digite no input para alimentar o componente filho automáticamente através das props.</p>
    <input type="text" v-model="inputText">
    <CardComponent :dataSource="inputText"></CardComponent>
    <h1>PrimeiraPagina</h1>

    <h2>{{ appStore.getParametroArmazenado }}</h2>

    <ul>
        <li v-if="Object.keys(appStore.getDadosCep).length !== 0" v-for="item in Object.keys(appStore.getDadosCep)">{{
            appStore.getDadosCep[item] }}</li>
    </ul>
</template>
<style>
.redBar {
    color: #ffffff;
    background-color: red;
    font-size: 2rem;
}
</style>