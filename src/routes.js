import { HomePage } from "./pages/home-page";
import { BlogPage } from "./pages/blog-page";
import { TodoPage } from "./pages/todo-page";

export default [
    {
        path: '/blog',
        element: <BlogPage/>
    },
    {
        path: '/todos',
        element: <TodoPage/>
    },
    {
        path: '/',
        element: <HomePage/>
    }
]
