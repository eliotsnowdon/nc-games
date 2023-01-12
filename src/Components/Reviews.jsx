import {useEffect} from "react"
import { useState } from "react"
import { getReviews } from "../apis"
import { Link } from "react-router-dom"

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
                    <li key={title}>
                    <Link to= {`/reviews/${review_id}`}>
                    Title:{title}
                    </Link>
                    </li>
                    <li key={designer}>
                    Designer:{designer}
                    </li>
                    <li key={votes}>
                    Votes:{votes}
                    </li>
                    <li key={review_id}>
                    Review id:{review_id}
                    </li>
                    <li key={owner}>
                    Owner: {owner}
                    </li>
                    <li key={comment_count}>
                    Comment Count: {comment_count}
                    </li>
                </ul>
            })}
        </main>
    )

    }}