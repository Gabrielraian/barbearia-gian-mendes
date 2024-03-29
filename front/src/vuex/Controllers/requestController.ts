import  axios  from 'axios';
import appSettings from '@/../appsettings.json';
export class RequestController {
    
    private useToast: any;
    private token: string;
    constructor(useToast:any)
    {
        this.token = ''; 
        this.useToast = useToast;
        axios.defaults.baseURL = appSettings.ApiUrl;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'GET, POST, PUT, DELETE';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
        axios.defaults.headers.post['Access-Control-Request-Headers'] = 'Content-Type, Authorization';
        axios.defaults.headers.post['Accept'] = '*/*';
        axios.defaults.headers.post['Connection'] = 'keep-alive';
        axios.defaults.headers.post['Accept-Encoding'] = 'gzip, deflate, br';
        axios.defaults.headers.put = axios.defaults.headers.post;
    }
    public  setToken(token:string):void
    {   
        this.token = `Authorization=Bearer ${token}`;
        axios.defaults.headers.post['Authorization'],
        axios.defaults.headers.put['Authorization'] = `Bearer ${token}`;
    }
    //Adiciona o token na URL para ser enviado no GET e DELETE quando houver token definido
    private getUrlWithToken(url:string )
    {
        return url.includes('?')? `${url}&${this.token}` : `${url}?${this.token}`;
    }
    private addToastErrorMessage(status:number , message:string )
    { 
        //Configurar aqui o retorno padrão para os tipos de resposta 300~500
        //O tipo de resposta 200 por padrão do axios é retornado como sucesso
        //Enquanto os outros tipos são retornados no catch como erro.
        //Severity types : info , success , warn , error 
        let severity: string;
        let summary: string;
        let life: number; 
        
        if (status >= 300 && status <= 399)
        {
            life = 5000;
            summary = 'Multiple Choices';
            severity = 'info'
        }
            
        if (status >= 400 && status <= 499)
        {
            life = 5000;
            summary = 'Invalid input'
            severity = 'warn    '
        }
            
        if (status >= 500 && status <= 599 || status == 0 )
        {
            life = 4000; 
            summary = 'Server error';
            severity = 'error';
        }

        this.useToast.add({ severity: severity, summary: summary, detail: message, life: life })
    }
 
    async post(url: string, body: any)
    {
        try
        {
            return await axios.post(url , body)     
        }
        catch (error)
        {
             this.addToastErrorMessage(error.request.status, error.message);
             return error;
        }
    }
     async get(url: string )
     {
         try
         {
             return await axios.get(this.getUrlWithToken(url));     
         }
         catch (error)
         {
             this.addToastErrorMessage(error.request.status, error.message);
             return error;
         }         
    }
    async delete(url: string)
    {
        try
        {
           return await axios.delete(this.getUrlWithToken(url))     
        }
        catch (error)
        {
           this.addToastErrorMessage(error.request.status, error.message);
           return error;
        }
    }
    async put(url: string, body: any)
    {
        try
        {
           return await axios.put(url , body)     
        }
        catch (error)
        {
            this.addToastErrorMessage(error.request.status, error.message);
            return error;
        }
    }
}
