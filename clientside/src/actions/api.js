import axios from 'axios';

//Necessário mudar a porta de acordo com a porta aberta no back-end
const baseUrl = 'https://localhost:44356/api/'

export default {

    classificado(url = baseUrl + 'classificados/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}