
import { useState } from "react"
import { postComment } from "../apis"

export const AddComment = ({setComment, review_id}) => {
    const [commentChange, setCommentChange] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [success, setSuccess] = useState("")


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
setButtonDisabled(true)
      postComment(review_id, commentChange).then(() => {
            setCommentChange("")
            setSuccess("addComment")
            setButtonDisabled(false)
        }).catch((err) => {
            setComment((currComments)=> {
                setCommentChange("Failed retry")
                return (
                    currComments.shift()
                    )
            })
            setSuccess("failedComment")
            setButtonDisabled(false)
        })
    }


    {if(buttonDisabled === true){
    return (
            <section>
                <p>Uploading....</p>
            </section>
        )
    }}

   return (
        <section className="addCommentForm">
            <form onSubmit={handleSubmit}>
<textarea className={success}required
    value={commentChange}
    onChange={(e) => setCommentChange(e.target.value)}
></textarea>
<button id="addButton" disabled={buttonDisabled} className={success}>Add Comment</button>
</form>
        </section>
    )
}