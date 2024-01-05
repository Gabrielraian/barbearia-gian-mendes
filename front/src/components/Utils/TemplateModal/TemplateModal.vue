<script lang="ts">
export default {
}
</script>
<template>
    <div class="modal">
        <div class="container">
            <div class="container--header">
                <!-- Do lado de fora o name do slot irá identificar qual template ele irá color aqui -->
                <slot name="header"></slot>
            </div>
            <div class="container--body">
                <slot name="body"></slot>
            </div>
            <div class="container--footer">
                <slot name="footer"></slot>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
//Propriedade scoped faz com que o css deste arquivo seja aplicado somente neste componente.
//utilizar lang="scss" para ler arquivos scss

@import './style.scss';
</style>