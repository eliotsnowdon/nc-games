import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getComments } from "../apis";
import { AddComment } from "./AddComment";

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

    if(isLoading === true) {return (
    <section>
    <p>Loading...</p>
    </section>)}
    else if(comment.length !== 0){
    return (
        <section className="Comments">
            <AddComment setComment ={setComment} review_id={item_no.review_id}/>
     <p>Comments:</p>
        {comment.map(({author,body}) => {
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
        <section>
            <AddComment setComment ={setComment} review_id={item_no.review_id}/>
            <p>No Comments</p>
        </section>
        
    )
}
}