import { ref , computed } from "vue";
import { defineStore } from 'pinia';
import axios from "axios";

export const appStore = defineStore('app' , {
    
    state: () => {
        return {
            parametroArmazenado: "", 
            dadosCep: {},
            showModal:false,
        }
    },
    getters: {
        getParametroArmazenado(state)
        {
            return state.parametroArmazenado;
        }, 
        getDadosCep(state)
        {
            return state.dadosCep;
        },
        getShowModal(state)
        {
            return state.showModal;
        }
    },
    
    actions:{
        setParametroArmazenado( novaStringGlobal:string) 
        {
            this.parametroArmazenado=novaStringGlobal;
        },
        getCep(cep: string)
        {
            
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(res => { this.dadosCep = res.data; console.log(res);});

        },
        setShowModal()
        {
            this.showModal = !this.showModal
        }

        
    }



});