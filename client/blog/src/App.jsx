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
  return (
      <>
        <RouterProvider router={router}/>
        <ToastContainer position='bottom-right'/>
      </>

  );
}

export default App;
