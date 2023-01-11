import { useState } from "react";
import { patchVotes } from "../apis";


export default function Votes({votes, review_id}) {
    const [voteChange, setVoteChange] = useState(0);
    

    function incVotes() {
        setVoteChange((currVotes) => currVotes + 1);
        patchVotes(review_id, 1).catch((err) => {
            setVoteChange((currVotes) => currVotes -1);
            console.error(err)
        })
    }

    return (
        <section>
            <p>Votes: {votes + voteChange}</p>
            <button onClick={incVotes}>👍</button>
        </section>
    )
}