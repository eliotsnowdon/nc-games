import axios from 'axios'

export const getReviews = () => {
    const myApi = axios.create({
        baseURL: "https://host-for-nc-games.onrender.com/api"
    })
    return myApi.get(`/reviews`).then((result) => {
        return result.data;
    })
}