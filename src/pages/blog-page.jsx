import { useEffect } from "react"
import { useState } from "react"
import { Comments } from "../cmps/comments"
import { List } from "../cmps/list"
import { blogService } from "../services/blog.service"


export const BlogPage = () => {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState(null)

    useEffect(() => {
        loadusers()
    }, [])

    const loadusers = async () => {
        setPosts(await blogService.getPosts())
    }

    const loadComments = async (postId) => {
        setComments(await blogService.getComments(postId))
    }

    if (!posts) return <div>Loading..</div>
    return <div className="post-page flex column">
        <div className="page-body flex">
            <List items={posts} setItem={setComments} loadFunc={loadComments} type='posts' />
            {comments && <Comments comments={comments} setComments={setComments} />}
        </div>

    </div>
}