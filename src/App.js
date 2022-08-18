import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./components/bookDetails";
import Home from "./components/home";
import "./App.css";
import Navbar from "./components/navbar";


function App() {
  return <>

              <Router>
              <Navbar />

                <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/books'  element={<Home />}/>
                <Route path='/books/:id' element={<BookDetails />}/>
                </Routes>    
              </Router>

        </>;
}

export default App;
