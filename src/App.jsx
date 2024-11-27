/* eslint-disable no-unused-vars */
import React from "react"
import {Routes,Route} from 'react-router-dom'
import './App.css'
import LandingPage from "./stores/pages/LandingPage"
import Mobiles from "./stores/components/Mobiles"
import MobilePage from "./stores/pages/MobilePage"
import ComputerPage from "./stores/pages/ComputerPage"
import WatchPage from "./stores/pages/WatchPage"
import MensPage from "./stores/pages/MensPage"
import WomanPage from "./stores/pages/WomanPage"
import AcPage from "./stores/pages/AcPage"
import TvPage from "./stores/pages/TvPage"
import FurniturePage from "./stores/pages/FurniturePage"
import BooksPage from "./stores/pages/BooksPage"
import ToysPage from './stores/pages/ToysPage'
import MobileSingle from "./Single/MobileSingle"
import UserCart from "./stores/UserCart"
import ComputerSingle from "./Single/ComputerSingle"
import WatchSingle from "./Single/WatchSingle"
import MenSingle from "./Single/MenSingle"
import WomanSingle from "./Single/WomanSingle"
import AcSingle from "./Single/AcSingle"
import TvSingle from "./Single/TvSingle"
function App() {

    return (
      <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/mobiles" element={<MobilePage/>} />
        <Route path="/computer" element={<ComputerPage/>} />
        <Route path="/watches" element={<WatchPage/>} />
        <Route path="/mens" element={<MensPage/>} />
        <Route path="/women" element={<WomanPage/>} />
        <Route path="/ac" element={<AcPage/>} />
        <Route path="/tv" element={<TvPage/>} />
        <Route path="/furniture" element={<FurniturePage/>} />
        <Route path="/books" element={<BooksPage/>}/>
        <Route path="/toys" element={<ToysPage/>}/>

        <Route path="/mobiles/:id" element={<MobileSingle/>}/>
        <Route path="/computer/:id" element={<ComputerSingle/>}/>
        <Route path="/watches/:id" element={<WatchSingle/>}/>
        <Route path="/mens/:id" element={<MenSingle/>}/>

         <Route path="/ac/:id" element={<AcSingle/>}/>
        <Route path="/women/:id" element={<WomanSingle/>}/>
        <Route path="/tv/:id" element={<TvSingle/>}/>




        <Route path="/cart" element={<UserCart/>}/>

        
       
      </Routes>
      </>
    )
}

export default App
