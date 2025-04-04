import React from 'react'
import{Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdmin from './components/OnlyAdmin'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'

const App = () => {
  return (
    <BrowserRouter>
    {/* //hello */}
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Route>

      <Route element={<OnlyAdmin/>}>
      <Route path="/create-post" element={<CreatePost/>}></Route>
      <Route path="/update-post/:postId" element={<UpdatePost/>}></Route>
      </Route>
      
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/post/:postSlug" element={<PostPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App