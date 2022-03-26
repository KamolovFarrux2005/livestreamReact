import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Adminlayout from './layouts/AdminLayout';
// import NoAuthLayout from './layouts/NoAuthLayout';
import Login from './components/Login/Login';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Movies from './views/Movies/Movies';
import TvShow from './views/TvShow/TvShow';
import Categories from './views/Categories/Categories';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Adminlayout />}>
            <Route path='' element={
              // <ProtectedRoute>
                <Home />
              /* </ProtectedRoute> */
            }></Route>

            <Route path='home' element={
              // <ProtectedRoute>
               <Home />
              // </ProtectedRoute>
            }></Route>
            <Route path='singlemovie' element={
              // <ProtectedRoute>
                <Movies/>
              // </ProtectedRoute>
            }></Route>
            <Route path='categories' element={
              // <ProtectedRoute>
                <Categories/>
              // </ProtectedRoute>
            }></Route>
            <Route path='tvshow' element={
              <TvShow/>
            }></Route>
            
          </Route>

          <Route path='/auth'>
            {/* <Route path='' element={<Navigate to="/auth/login" replace={true} />} /> */}
            <Route path='login' index element={<Login />} />
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;