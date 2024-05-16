import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import SignUpPage from "../pages/signup/SignUpPage";
import FeedPage from "../pages/feed/FeedPage"
import CommentPage from "../pages/comments/CommentPage"
import ErrorPage from "../pages/error/ErrorPage"

const Router = () => {
    return (      
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element ={<LoginPage />} />
                    <Route path="/signup" element ={<SignUpPage />} />
                    <Route path="/" element ={<FeedPage />} />
                    <Route path="/posts/:post_id/comments" element ={<CommentPage />} />
                    <Route path="*" element ={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
    )
}

export default Router