import {useEffect} from "react"
import { useState } from "react"
import { getReviews } from "../apis"

export const ReviewList = () => {
    const [reviews, setReviews]= useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        getReviews().then((reviewList) => {
            setReviews(reviewList.reviews)
            setIsLoading(false)
        })
    }, [])

if(isLoading === true) {return <p>Loading...</p>}
else {
    return (
        <main>
            {reviews.map(({title, designer, votes,review_id, owner, comment_count}) => {
                return <ul>
                    <li>
                    Title:{title}
                    </li>
                    <li>
                    Designer:{designer}
                    </li>
                    <li>
                    Votes:{votes}
                    </li>
                    <li>
                    Review id:{review_id}
                    </li>
                    <li>
                    Owner: {owner}
                    </li>
                    <li>
                    Comment Count: {comment_count}
                    </li>
                </ul>
            })}
        </main>
    )

}}