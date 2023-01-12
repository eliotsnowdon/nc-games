
import { useState } from "react"
import { postComment } from "../apis"

export const AddComment = ({setComment, review_id}) => {
    const [commentChange, setCommentChange] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = {
        "comment_id": Date.now(),
        "body": commentChange,
        "review_id": review_id,
        "author": "jessjelly",
        "votes": 0,
        "created_at": "just now"
        }
        setComment((currComments) => {
            return [comment, ...currComments]
              }
)
      postComment(review_id, commentChange).then(() => {
            setCommentChange("")
        }).catch((err) => {
            setComment((currComments)=> {
                return (
                    <section>
                    <p>Failed to upload</p>
                    {currComments.shift()}
                    </section>
                   
                    )
            })
        })
    }

    return (
        <section className="addComment">
            <form onSubmit={handleSubmit}>
<textarea required
    value={commentChange}
    onChange={(e) => setCommentChange(e.target.value)}
></textarea>
<button className="submitButton">Add Comment</button>
</form>
        </section>
    )
}