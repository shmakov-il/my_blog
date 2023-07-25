import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import RootLayout from "./layouts/RootLayout";
import MainPage from "./pages/MainPage";
import AddPostPage from "./pages/AddPostPage";
import EditPostPage from "./pages/EditPostPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostsPage";
import RegisterPage from "./pages/RegisterPage";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUser} from "./redux/features/auth/authSlice";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: 'new',
        element: <AddPostPage />
      },
      {
        path: 'edit/:id',
        element: <EditPostPage />
      },
      {
        path: 'login',
        element: <LoginPage/>
      },
      {
        path: 'post/:id',
        element: <PostPage />
      },
      {
        path: 'posts',
        element: <PostsPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }

]);


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
      <>
        <RouterProvider router={router}/>
        <ToastContainer position='bottom-right'/>
      </>

  );
}

export default App;
