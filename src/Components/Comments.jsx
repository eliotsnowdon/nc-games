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
    console.log(comment)
    if(isLoading === true) {return <p>Loading...</p>}
    else if(comment.length != 0){
    return (
        <main className="Comments">
        {comment.map(({comment_id,author,body}) => {
            return (
                <ul>
                    <p>Comments:</p>
                    <li>Author: {author}</li>
                    <li>{body}</li>
                    <li>Comment ID: {comment_id}</li>
                </ul>
            )
        })}
        </main>
    )
}
else {
    return (
        <p>No Comments</p>
    )
}
}