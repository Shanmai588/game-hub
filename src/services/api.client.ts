import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'77c4049156e24e2e9477e972fbf9c91e'
    }
})