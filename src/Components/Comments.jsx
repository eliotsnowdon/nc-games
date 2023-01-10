import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getComments } from "../apis";

export const Comments = () => {
    const [comment, setComment] = useState([]);
    const item_no = useParams()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getComments(item_no.review_id).then((review_data) => {
            setComment(review_data.comments)
            setIsLoading(false)
        })
    }, [item_no])

    if(isLoading === true) {return <p>Loading...</p>}
    else if(comment.length != 0){
    return (
        <section className="Comments">
     <p>Comments:</p>
        {comment.map(({comment_id,author,body}) => {
            return (
                <ul>
                    <li>Author: {author}</li>
                    <li>{body}</li>
                </ul>
            )
        })}
        </section>
    )
}
else {
    return (
        <p>No Comments</p>
    )
}
}