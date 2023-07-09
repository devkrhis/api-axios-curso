import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = 'https://curso-vue-60a1d-default-rtdb.firebaseio.com'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-60a1d-default-rtdb.firebaseio.com'
        })

        // interceptor de requisição, consigo interceptar a minha requisição.
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method) 
            // if(config.method == 'post'){ --> vai fazer todo post se tornar put, sendo assim consigo interceptar o meu metodo.
            //     config.method = 'put'
            // }
            return config
        }, error => Promise.reject(error))

        // interceptor de responde, consigo interceptar a minha resposta
        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data){
            //     array.push({ id: chave, ...res.data[chave]})
            // }

            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})