import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getSingleReview } from "../apis";
import { Comments } from "./Comments";
import  Votes  from "./Votes"

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
        <main className="singleReview">
            <h2>Review</h2>
            {review.map(({review_body,title,votes,review_id}) => {
                return (
                    <ul>
                    <h3>Title: {title} </h3>
                    <li>{review_body}</li>
                    <li><Votes votes={votes} review_id={review_id} /></li>
                    </ul>
                )
            })}
            <Comments />
        </main>
        
       
    )
}
}