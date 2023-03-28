import './App.css';
import { Routes, Route, Navigate  } from 'react-router-dom'
import {Home} from './pages/home/Home';
import {Login} from './pages/login/Login';
import {Register} from './pages/register/Register';
import {Create} from './pages/create/Create';
import {BlogDetails} from './pages/blogDetails/BlogDetails';
import {UpdateBlog} from './pages/updateBlog/UpdateBlog';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {Footer} from './components/footer/Footer'
import {Navbar} from './components/navbar/Navbar'
import {NotFound} from './pages/notFound/NotFound';
import { About } from './pages/about/About';

function App() {

  const { user } = useSelector((state) => state.auth)

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])

  return (
    <div className="App">
      {user && <Navbar />}
      <Routes>
      <Route path='/' element={<Home /> } />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
          <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
          <Route path='/about' element={user ? <About /> : <Navigate to='/login' />} />
          <Route path='/blogDetails/:id' element={user ? <BlogDetails /> : <Navigate to='/login' />} />
          <Route path='/updateBlog/:id' element={user ? <UpdateBlog /> : <Navigate to='/login' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      {user && <Footer />}
    </div>
  );
}

export default App;
