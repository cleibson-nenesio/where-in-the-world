import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Country } from "./country"
import { Home } from "./home"

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/country/:code' element={<Country />}/>
        </Routes>
    </BrowserRouter>
)
    
