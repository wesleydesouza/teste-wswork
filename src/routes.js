import { Routes, Route, BrowserRouter  } from "react-router-dom";

import Home from "./components/Home";
import CarList from "./components/CarList";
import Header from "./components/Header";
import Car from "./components/Car";
import Error from "./components/Error";


const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/list" element={<CarList/>}/>
                <Route path="/car/:id" element={<Car/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;