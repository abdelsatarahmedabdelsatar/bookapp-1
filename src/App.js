import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./components/bookDetails";
import Home from "./components/home";
import "./App.css";
import Navbar from "./components/navbar";
import MyCart from "./components/myCart";


function App() {
  return <>

              <Router>
              <Navbar />

                <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/books'  element={<Home />}/>
                <Route path='/books/:id' element={<BookDetails />}/>
                <Route path='/carts' element={<MyCart />}/>
                </Routes>    
              </Router>

        </>;
}

export default App;
