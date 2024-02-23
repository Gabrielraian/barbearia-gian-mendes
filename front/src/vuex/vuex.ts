import { Module, createStore } from 'vuex';
import { EnumMessageType, MessageInterface, State } from './Entity/vuex';
import { RequestController } from '@/vuex/Controllers/requestController';
import appSettings from '@/../appsettings.json';
import {RequestModel} from './Entity/requestModel';
import { ToastMessage } from './Entity/toastMessage';

const state :State={
    message: [],
    login : null,
    navMenu: false,  
    requestController: null,
    config: appSettings, 
    useToast: null , 
};
//As mutations são normalmente utilizados para modificar os dados do vuex e não retornam dados
const mutations = {
//Utilizar esta mutation para configurar a sessão do usuário no frontend
    setLogin(state: State, login: any)
    {   
        state.requestController.setToken(login);
        state.login = login;
    },
    //Este metodo é utilizado para fazer o setup do Toast apenas uma vêz quando o App.vue é inicializado
    setToast(state: State, useToast: any)
    {
        state.requestController = new RequestController(useToast);
        state.useToast = useToast;
    },
    //Este metodo é utilizado caso seja necessário fazer um toast com o vuex.
    addToast(state: State , toast:ToastMessage )
    {
        state.useToast.add({ severity: toast.severity , summary: toast.summary, detail: toast.detail , life: toast.life })
    },
};
//O getters é utilizado para receber um parametro,não é possível modificar dados aqui.
const getters = {
    //Retorna os dados definidos no login
    getLogin(state: State)
    {
        return state.login;
    },
    //Retorna as configurações da aplicação.
    getConfig(state:State)
    {
        return state.config;
    },
}
//Actions são utilizadas para realizar ações e retornam dados como uma de Promise
const actions = {
    //Utiliza a classe RequestController para realizazr uma api request e retorna de forma sincrona
    //seus dados.
    async request(context ,requestParams:RequestModel)
    {
        const httpMethod = requestParams.method.toLowerCase();
        switch (httpMethod)
        {
            case 'get': return await state.requestController.get(requestParams.url); break;
            case 'post': return await state.requestController.post(requestParams.url, requestParams.body); break;
            case 'delete': return await state.requestController.delete(requestParams.url); break;
            case 'put': return await state.requestController.put(requestParams.url, requestParams.body); break;
            default: return null;
        }
    }
}
//retorna o vuex com todas as opções definidas acima para ser utilizada na main.ts
export default createStore({
    state : state , 
    getters: getters, 
    actions : actions,
    mutations: mutations, 
}) ; 
