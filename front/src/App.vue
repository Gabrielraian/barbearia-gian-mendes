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
      inputCep: '',
      endereco: null
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
      //É possível agora enviar requests a API através do vuex 
      //Deve-se definir o requestModel com o body , URL e method
      let requestModel = {} as RequestModel;
      requestModel.body = null;
      requestModel.method = 'GET';
      requestModel.url = 'http://localhost:3000/';
      //Request com vuex
      this.$store.dispatch('request', requestModel);

    },
    async sendRequestCeps() {
      let requestModel = {} as RequestModel;
      requestModel.body = null;
      requestModel.method = 'GET';
      requestModel.url = `https://viacep.com.br/ws/${this.inputCep}/json/`;
      //Request com vuex
      this.endereco = await this.$store.dispatch('request', requestModel);

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
  <Toast />
  <h4 class="error">Testar request error</h4>
  <button @click="sendRequest">Fazer request com Toast e Vuex</button>
  <br>
  <h4 class="error">Testar cep</h4>
  <label>Cep request</label>
  <input type="text" v-model="inputCep" />
  <button @click="sendRequestCeps">Pesquisar cep</button>
  <br>
  <h4>Url enviada : https://viacep.com.br/ws/{{ this.inputCep }}/json/</h4>
  {{ this.endereco }}
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
</style>./pinia/appStore