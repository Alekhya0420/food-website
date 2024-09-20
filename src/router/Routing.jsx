import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Correct import
import Header from '../layout/Header'
import Home from '../component/Home'
import Contact from '../component/Contact'
import Menu from '../component/Menu'
import About from '../component/About'
import Footer from '../layout/Footer'
import Food from '../component/food/Food'
import ProtectedRoutes from '../auth/isAuth'
import FoodDetails from '../component/food/FoodDetails'
import SnackRecipes from '../component/food/SnackRecipes'
import Login from '../component/login/Login'
import PageNotFound from '../component/pagenotfound/PageNotFound'


function Routing() {
  return (
    <div>
        <Router>
            <Header />
            <Routes> {/* Correctly wrapping Route components */}
                <Route path="/" element={<Home/>} />
                <Route path="/menu-page" element={<Menu/>} />
                <Route path="/reg-page" element={<About/>} />
                <Route path="/contact-page" element={<Contact/>}/>
                <Route path="/login-page" element={<Login/>}/>

                <Route element={<ProtectedRoutes/>}>
                 <Route path="/food-page" element={<Food/>}/>
                 <Route path="/food-page/:myfood" element={<FoodDetails/>}/>
                 <Route path="/food-page/:myfood/:snack" element={<SnackRecipes />} />
               </Route>
               <Route path='*' element={<PageNotFound/>}/>

            </Routes>
            <Footer/>

        </Router>
    </div>
  )
}

export default Routing
