

export const Comments = (props) => {
    const { comments, setComments } = props
    console.log(comments)
    return <div className=" comments flex column">
        <h1>Comments List:</h1>
        <button onClick={() => setComments(null)} className="btn-cloase">Close</button>
        {comments.map(comment => {
            return <div className="comment flex column" key={comment.id}>
                <h3>{comment.name}</h3>
                <h4>{comment.email}</h4>
                <h5>{comment.body}</h5>
            </div>
        })}
    </div>
}