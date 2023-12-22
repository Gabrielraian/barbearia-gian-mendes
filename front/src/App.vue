<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { appStore } from './stores/appStore';
export default {
   data(){
      return{
        appStore : appStore() , 
        inputText : ""
      }
   },
   methods:{
      setParametroGlobal()
      {
        this.appStore.setParametroArmazenado(this.inputText);
      }
   }
}
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/PrimeiraPagina">PrimeiraPagina</RouterLink>
        <RouterLink to="/SegundaPagina">SegundaPagina</RouterLink>
      </nav>
    </div>
  </header>
<!-- a route view renderiza a rota atual -->
<div class="conteudo">
    <RouterView />

</div>
<input type="text" v-model="inputText">  
<button @click="setParametroGlobal" >SetarParametroGlobal</button>
</template>
<style>
  .conteudo{
    background-color:teal; 
    height:500px;
    width:100%;
  }
</style>