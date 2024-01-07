<script lang="ts">
import CardComponent from '@/components/PrimeiraPagina/CardComponent.vue';
import { appStore } from '@/stores/appStore'
import TemplateModal from '@/components/Utils/TemplateModal/TemplateModal.vue';
import BotaoFecharModal from '@/components/Utils/Buttons/BotaoFecharModal.vue';

export default {
    data() {
        return {
            inputText: null,
            //Define-se o appStore nos imports com os { } pois foi exportado como variável e não export default.
            appStore: appStore(),
        }
    },
    components: {
        CardComponent,
        TemplateModal,
        BotaoFecharModal
    },
    methods: {
        setModal() {
            //A função de abrir e fechar modal fica dentro do Pinia,
            //então o estado do modal pode ser modificado em qualquer componente.

            this.appStore.setShowModal();
        }

    }
}
</script>
<template>
    <p class="redBar">digite no input para alimentar o componente filho automáticamente através das props.</p>
    <input type="text" v-model="inputText">
    <CardComponent :dataSource="inputText"></CardComponent>
    <h1>PrimeiraPagina</h1>

    <h2>{{ appStore.getParametroArmazenado }}</h2>
    <TemplateModal v-show="appStore.getShowModal">
        <template #header>
            <BotaoFecharModal></BotaoFecharModal>
        </template>
        <template #body>
            <p> Aqui pode-se adicionar componentes ou Html ,para facilitar a utilização de dados
                mande todas as manipulações para o Pinia.
                O Pinia serve bem como um manipulador de dados para contextos pequenos e médios.
                Pode-se criar multiplos Pínias para facilitar a manutenção de código.
            </p>
            <p>

            </p>
        </template>
        <template #footer>
            <button>Botao falso 1</button>
            <button>Botao falso 2</button>
        </template>
    </TemplateModal>
    <ul>
        <li v-if="Object.keys(appStore.getDadosCep).length !== 0" v-for="item in Object.keys(appStore.getDadosCep)">{{
            appStore.getDadosCep[item] }}</li>
    </ul>

    <!-- Este botão chama a função show modal que chama a função setModal no Pinia -->
    <button @click="setModal">Mostrar Modal</button>
</template>
<style>
.redBar {
    color: #ffffff;
    background-color: red;
    font-size: 2rem;
}
</style>