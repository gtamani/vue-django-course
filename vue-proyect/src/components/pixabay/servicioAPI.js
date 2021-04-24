import api from "./axios";

const API_KEY = process.env.VUE_APP_KEY

class ServicioApi
{
    async getImgs(data,pg=1){
        const keyWords = encodeURIComponent(data);
        const params = `?key=${API_KEY}&q=${keyWords}&lang=es¬pagr${pg}`
        const r = await api.get(params)
        console.log(t);
        return r.data;
    }
}

export default new ServicioApi();