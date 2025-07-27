import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Added React Router
import Home from "./pages/Home";
import About from "./pages/About"; // Import About page
import Contact from "./pages/Contact"; // Import Contact page
import Cart from "./pages/cart/Cart"; // Import Cart page
import Login from "./pages/Login"; // Import Login page
import Register from "./pages/Register"; // Import Register page
import SearchPage from "./pages/SearchPage"; // Import Search page
import MyAccount from "./pages/MyAccount"; // Import MyAccount page
//import CategoriesMain from "./components/card/CategoriesMain"; // Import CategoriesMain page

import "./App.css"; // Your global styles

// FootBall
import FootballMain from "./pages/FootBall/FootballMain"; // Import FootballMain page
import Ball from "./pages/FootBall/Ball"; // Import Ball page
import Footwear from "./pages/FootBall/Footwear"; // Import Footwear page
import Bags from "./pages/FootBall/Bags"; // Import Bags page
import Teamwear from "./pages/FootBall/Teamwear"; // Import Teamwear page
import GoalKeeper from "./pages/FootBall/GoalKeeper"; // Import GoalKeeper page
import ShinGuards from "./pages/FootBall/ShinGuards"; // Import ShinGuards page
import Stocking from "./pages/FootBall/Stocking"; // Import Stocking page
import TrainingEquipments from "./pages/FootBall/TrainingEquipments"; // Import TrainingEquipments page
import Accessories from "./pages/FootBall/Accessories"; // Import Accessories page


// BasketBall
import BasketBallMain from "./pages/BasketBall/BasketBallMain"; // Import BasketBallMain page
import BasketBalls from "./pages/BasketBall/Balls"; // Import Balls page
import BasketBallFootwear from "./pages/BasketBall/Footwear"; // Import Footwear page
import BasketBallBags from "./pages/BasketBall/Bags"; // Import Bags page
import BasketBallTeamwear from "./pages/BasketBall/Teamwear"; // Import Teamwear page
import BasketBallSocks from "./pages/BasketBall/Socks"; // Import Socks page
import BasketBallEquipments from "./pages/BasketBall/Equipment"; // Import Equipments page
import BasketBallAccessories from "./pages/BasketBall/Accessories"; // Import Accessories page


 // Volleyball
import VolleyballMain from "./pages/Volleyball/VolleyballMain"; // Import VolleyballMain page

// Turf
import TurfMain from "./pages/Turf/TurfMain"; // Import TurfMain page

// Tennis
import TennisMain from "./pages/Tennis/TennisMain"; // Import TennisMain page

// Cricket
import CricketMain from "./pages/Cricket/CricketMain"; // Import CricketMain page

// Running
import RunningMain from "./pages/Running/RunningMain"; // Import RunningMain page

// Badminton
import BadmintonFootwear from "./pages/Badminton/Footwear"; // Import Footwear page
import BadmintonBags from "./pages/Badminton/Bags"; // Import Bags page
import BadmintonApparels from "./pages/Badminton/Apparels"; // Import Apparels page
import BadmintonSocks from "./pages/Badminton/Socks"; // Import Socks page
import BadmintonAccessories from "./pages/Badminton/Accessories"; // Import Accessories page
import BadmintonMain from "./pages/Badminton/BadmintonMain"; // Import BadmintonMain page

// Men
import TShirts from "./pages/Men/TShirts"; // Import TShirts page
import Shorts from "./pages/Men/Shorts"; // Import Shorts page
import MenJackets from "./pages/Men/Jackets"; // Import Men's Jackets page
import Tracksuits from "./pages/Men/Tracksuits"; // Import Tracksuits page

//Women
import Tops from "./pages/Women/Tops"; // Import Tops page
import Leggings from "./pages/Women/Laggings"; // Import Leggings page
import Jackets from "./pages/Women/Jackets"; // Import Women's Jackets page
import Skirts from "./pages/Women/Skirts"; // Import Skirts page

//Sports Shoes
import RunningShoes from "./pages/Sports Shoes/RunningShoes"; // Import RunningShoes page
import FootballBoots from "./pages/Sports Shoes/FootballBoots"; // Import FootballBoots page
import BasketBallShoes from "./pages/Sports Shoes/BasketBallShoes"; // Import BasketBallShoes page

//Casual Shoes
import Sneakers from "./pages/Casual Shoes/Sneakers"; // Import Sneakers page
import Slides from "./pages/Casual Shoes/Slides"; // Import Slides page
import FlipFlops from "./pages/Casual Shoes/flipFlops"; // Import FlipFlops page

//Supports
import KneeSupport from "./pages/Supports/KneeSupport"; // Import KneeSupport page
import ElbowSupport from "./pages/Supports/ElbowSupport"; // Import ElbowSupport page
import AnkleSupport from "./pages/Supports/AnkleSupport"; // Import AnkleSupport page

//Gear
import GearBags from "./pages/Gear/GearBags"; // Import GearBags page
import GearSocks from "./pages/Gear/GearSocks"; // Import GearSocks page
import WaterBottles from "./pages/Gear/WaterBottles"; // Import WaterBottles page
import HeadBands from "./pages/Gear/HeadBands"; // Import HeadBands page

//Offers
import Offers from "./pages/Offers/Offers"; // Import Offers page
import ClearanceSale from "./pages/Offers/ClearanceSale"; // Import ClearanceSale page
import Buy1Get1 from "./pages/Offers/Buy1Get1"; // Import Buy1Get1 page
import Flat50Off from "./pages/Offers/Flat50Off"; // Import Flat50Off page





function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/cart" element={<Cart />} /> {/*  Cart page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/register" element={<Register />} /> {/* Register page */}
          <Route path="/search" element={<SearchPage />} /> {/* Search page */}
          <Route path="/search/:query" element={<SearchPage />} /> {/* Search results page */}
          <Route path="/myaccount" element={<MyAccount />} /> {/* My Account page */}
          {/* <Route path="/categories" element={<CategoriesMain />} /> {/* CategoriesMain page */}
           
             {/* FootBall */}
          <Route path="/Footballmain" element={<FootballMain />} /> {/* FootballMain page */}
          <Route path="/FootBall/balls" element={<Ball />} /> {/* Ball page */}
          <Route path="/FootBall/footwear" element={<Footwear />} /> {/* Footwear page */}
          <Route path="/FootBall/bags" element={<Bags />} /> {/* Bags page */}
        
          <Route path="/FootBall/teamwear" element={<Teamwear />} /> {/* Teamwear page */}
          <Route path="/FootBall/goalkeeper-gloves" element={<GoalKeeper />} /> {/* GoalKeeper page */}
          <Route path="/FootBall/shin-guards" element={<ShinGuards />} /> {/* ShinGuards page */}
          <Route path="/FootBall/stockings" element={<Stocking />} /> {/* Stocking page */}
          <Route path="/FootBall/training-equipments" element={<TrainingEquipments />} /> {/* TrainingEquipments page */}
          <Route path="/FootBall/accessories" element={<Accessories />} /> {/* Accessories page */}
         
         {/* BasketBall */}
          <Route path="/BasketBallmain" element={<BasketBallMain />} /> {/* BasketBallMain page */}
          <Route path="/BasketBall/basketballs" element={<BasketBalls />} /> {/* Balls page */}
          <Route path="/BasketBall/basketballfootwear" element={<BasketBallFootwear />} /> {/* Footwear page */}
          <Route path="/BasketBall/basketballbags" element={<BasketBallBags />} /> {/* Bags page */}
          <Route path="/BasketBall/basketballteamwear" element={<BasketBallTeamwear />} /> {/* Teamwear page */}
          <Route path="/BasketBall/basketballsocks" element={<BasketBallSocks />} /> {/* Socks page */}
          <Route path="/BasketBall/basketballequipments" element={<BasketBallEquipments />} /> {/* Equipments page */}
          <Route path="/BasketBall/basketballaccessories" element={<BasketBallAccessories />} /> {/* Accessories page */}
          
          {/* Volleyball */}
          <Route path="/Volleyballmain" element={<VolleyballMain />} /> {/* VolleyballMain page */}

          {/* Turf */}
          <Route path="/Turfmain" element={<TurfMain />} /> {/* TurfMain page */}
           
           {/* Tennis */}
           <Route path="/Tennismain" element={<TennisMain />} /> {/* TennisMain page */}

           {/* Cricket */}
           <Route path="/Cricketmain" element={<CricketMain />} /> {/* CricketMain page */}

           {/* Running */}
           <Route path="/Runningmain" element={<RunningMain />} /> {/* RunningMain page */}
           
         
          {/* Badminton */}
          <Route path="/Badmintonmain" element={<BadmintonMain />} /> {/* BadmintonMain page */}
          <Route path="/Badminton/footwear" element={<BadmintonFootwear />} /> {/* Footwear page */}
          <Route path="/Badminton/bags" element={<BadmintonBags />} /> {/* Bags page */}
          <Route path="/Badminton/apparels" element={<BadmintonApparels />} /> {/* Apparels page */}
          <Route path="/Badminton/socks" element={<BadmintonSocks />} /> {/* Socks page */}
          <Route path="/Badminton/accessories" element={<BadmintonAccessories />} /> {/* Accessories page */}
          
          {/* Men */}
          <Route path="/Men/tshirts" element={<TShirts />} /> {/* TShirts page */}
          <Route path="/Men/shorts" element={<Shorts />} /> {/* Shorts page */}
          <Route path="/Men/jackets" element={<MenJackets />} /> {/* Men's Jackets page */}
          <Route path="/Men/tracksuits" element={<Tracksuits />} /> {/* Tracksuits page */}

          {/* Women */}
          <Route path="/Women/tops" element={<Tops />} /> {/* Tops page */}
          <Route path="/Women/leggings" element={<Leggings />} /> {/* Leggings page */}
          <Route path="/Women/jackets" element={<Jackets />} /> {/* Women's Jackets page */}
          <Route path="/Women/skirts" element={<Skirts />} /> {/* Skirts page */}

          {/* Sports Shoes */}
          <Route path="/running-shoes" element={<RunningShoes />} /> {/* Running Shoes page */}
          <Route path="/football-boots" element={<FootballBoots />} /> {/* Football Boots page */}
          <Route path="/basketball-shoes" element={<BasketBallShoes />} /> {/* Basketball Shoes page */}
        
        {/* Casual Shoes */}
        
        <Route path="/sneakers" element={<Sneakers />} /> {/* Sneakers page */}
        <Route path="/slides" element={<Slides />} /> {/* Slides page */}
        <Route path="/flip-flops" element={<FlipFlops />} /> {/* FlipFlops page */}
        
        {/* Supports */}
       
        <Route path="/knee-support" element={<KneeSupport />} /> {/* KneeSupport page */}
        <Route path="/elbow-support" element={<ElbowSupport />} /> {/* ElbowSupport page */}
        <Route path="/ankle-support" element={<AnkleSupport />} /> {/* AnkleSupport page */}

        {/* Gear */}
       
        <Route path="/gear-bags" element={<GearBags />} /> {/* GearBags page */}
        <Route path="/gear-socks" element={<GearSocks />} /> {/* GearSocks page */}
        <Route path="/water-bottles" element={<WaterBottles />} /> {/* WaterBottles page */}
        <Route path="/headbands" element={<HeadBands />} /> {/* HeadBands page */}

        {/* Offers */}
        <Route path="/offers" element={<Offers />} /> {/* Offers page */}
        <Route path="/clearance-sale" element={<ClearanceSale />} /> {/* ClearanceSale page */}
        <Route path="/buy1-get1" element={<Buy1Get1 />} /> {/* Buy1Get1 page */}
        <Route path="/flat50-off" element={<Flat50Off />} /> {/* Flat50Off page */}
        
        {/* Additional routes to fix warnings */}
        <Route path="/balls" element={<Ball />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/goalkeeper-gloves" element={<GoalKeeper />} />
        <Route path="/t-shirts" element={<TShirts />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/stockings" element={<Stocking />} />
        <Route path="/teamwear" element={<Teamwear />} />
        <Route path="/training-equipments" element={<TrainingEquipments />} />
        {/* Football Routes */}
        <Route path="/football-accessories" element={<Accessories />} />
        <Route path="/shin-guards" element={<ShinGuards />} />
        <Route path="/football-teamwear" element={<Teamwear />} />
        
        {/* Basketball Routes */}
        <Route path="/basketball-accessories" element={<BasketBallAccessories />} />
        
        {/* Badminton Routes */}
        <Route path="/badminton-accessories" element={<BadmintonAccessories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;