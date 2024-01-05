<script lang="ts">
import { appStore } from '@/stores/appStore';

export default {
    data() {
        return {
            appStore: appStore()
        }
    },
    methods: {
        setShowModal() {
            this.appStore.setShowModal();
        }
    }
}

</script>
<template>
    <h1 @click="setShowModal">X</h1>
</template>
<style scoped>
h1 {
    color: red;
    font-weight: bold;
}
</style>