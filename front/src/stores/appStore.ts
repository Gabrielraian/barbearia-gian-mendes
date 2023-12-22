import { ref , computed } from "vue";
import { defineStore } from 'pinia';

export const appStore = defineStore('app' , {
    
    state: () => {
        return {
            parametroArmazenado : ""
        }
    },
    getters:{
        getParametroArmazenado(state)
        {
            return state.parametroArmazenado;
        }, 
    },
    actions:{
        setParametroArmazenado( novaStringGlobal:string) 
        {
            this.parametroArmazenado=novaStringGlobal;
        }
        
    }



});