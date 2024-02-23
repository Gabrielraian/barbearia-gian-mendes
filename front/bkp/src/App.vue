<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { appStore } from './stores/appStore';

//Duas importações necessárias para o vuelidator
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength } from '@vuelidate/validators';//Para cada tipo de campo deve-se adicionar o tipo de import que será utilizado

//Template modal
import TemplateModal from '@/components/Utils/TemplateModal/TemplateModal.vue';

//Interface tipada para o Modelo de dados para utilizar para criar uma HttpRequest e Toast
import { RequestModel } from '@/vuex/Entity/requestModel';
import { ToastMessage } from '@/vuex/Entity/toastMessage';
//Servico de Toast VuePrime
import { useToast } from 'primevue/usetoast';

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      appStore: appStore(),
      dataSource: {
        inputText: '',
        inputEmail: ''
      },
      inputCep: ''
    }
  },
  methods: {
    setParametroGlobal() {
      this.appStore.setParametroArmazenado(this.dataSource.inputText);
    },
    getCep() {
      this.appStore.getCep(this.inputCep);
    },
    sendRequest() {
      let requestModel = {} as RequestModel;
      requestModel.body = null;
      requestModel.method = 'GET';
      requestModel.url = 'http://localhost:3000/';
      this.$store.dispatch('request', requestModel);

    },
    validations() {
      return {
        dataSource: {
          inputText: { required },
          inputEmail: { email },
        },
        inputCep: { numeric, required, minLength: minLength(8) }
      }
    },

  },
  beforeCreate() {
    this.$store.commit('setToast', useToast());
  }
}
</script>
<template>
  <button @click="sendRequest">Fazer request com Toast e Vuex</button>
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
  <!-- é aplicado a validação de campo do inputEmail contido no dataSource para escolher a classe , pode-se aplicar multiplas classes separadas por virgula.
     O Estado deve ser true para aplicar-->

  <label>Email <input type="email" v-model="dataSource.inputEmail"
      :class="{ 'error': v$.dataSource.inputEmail.$invalid, 'success': !v$.dataSource.inputEmail.$invalid }" /></label>

  <label>Texto <input type="text" v-model="dataSource.inputText"
      :class="{ 'error': v$.dataSource.inputText.$invalid, 'success': !v$.dataSource.inputText.$invalid }" /></label>

  <!--todos as propriedades do objeto dataSource devem ser válidos para habilitar o botão -->
  <button @click="setParametroGlobal" :disabled="v$.dataSource.$invalid">SetarParametroGlobal</button>

  <br><br><br>
  <label>Consultar Cep :<input type="text" v-model="inputCep"
      :class="{ 'error': v$.inputCep.$invalid, 'success': !v$.inputCep.$invalid }" /></label>
  <button :disabled="v$.inputCep.$invalid" @click="getCep">Consultar Cep</button>
</template>
<style>
.conteudo {
  background-color: teal;
  height: 500px;
  width: 100%;
}

.error {
  border-color: red;

}

.success {
  Border-color: green;
}
</style>