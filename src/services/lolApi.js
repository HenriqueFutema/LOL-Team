import axios from 'axios'

const lolApi = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/',
    headers: {
        'Access-Control-Allow-Origin': '*'

    }
})


export default lolApi