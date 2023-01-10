import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getSingleReview } from "../apis";

export const SingleReview = () => {
    const [review, setReview] = useState([]);
    const item_no = useParams()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getSingleReview(item_no.review_id).then((review_data) => {
            setReview(review_data.reviews)
            setIsLoading(false)
        })
    }, [item_no])
    
    if(isLoading === true) {return <p>Loading...</p>}
    else {
    return (
        <main>
            <h2>Review</h2>
            {review.map(({review_body}) => {
                return (
                    <p>{review_body}</p>
                )
            })}
        </main>
    )
}
}