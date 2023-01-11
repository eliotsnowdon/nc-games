import axios from 'axios'
const myApi = axios.create({
    baseURL: "https://host-for-nc-games.onrender.com/api"
})

export const getReviews = () => {
    return myApi.get(`/reviews`).then((result) => {
        return result.data;
    })
}

export const getSingleReview = (review_id) => {
    return myApi.get(`/reviews/${review_id}`).then((result) => {
        return result.data;
    })
}

export const getComments = (review_id) => {
    return myApi.get(`/reviews/${review_id}/comments`).then((result) => {
        return result.data;
    })
}

export const patchVotes = (review_id, increment) => {
    return myApi.patch(`/reviews/${review_id}`, {
        voteInc: increment
    })
    .then((result) => {
        return result.data
    })
}