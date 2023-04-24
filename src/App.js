import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { Routes, Route, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import HomePage from './Components/pages/pageLayout/homePage';
import SpecificPage from './Components/pages/SpecificMoviePage/SpecificPage';
import Navbar from './Components/Utility/Navbar/Navbar';
function App() {
  const [user, setUser] = useState();
  const  [isUser , setIsUser] =useState(false);

  const updateUser = () => {

    const demo_user = {
      name: "test_user",
      password: "password"
    }
    setIsUser(true)

    setUser(demo_user)

  }
  const navigate =useNavigate()

  useEffect(() => {
    if (!user)  {  navigate('/login') }

  }, [])




  return (
    <div >

{
  (isUser)?<Navbar/>:<></>
}

      <Routes>

        <Route path='/movies/:pageNumber' element={<HomePage />} />
        <Route path='/login' element={<Login updateUser={updateUser} />} />
        <Route path='/movies/movie/:movieId' element={<SpecificPage />} />




      </Routes>
    </div>
  );
}

export default App;
