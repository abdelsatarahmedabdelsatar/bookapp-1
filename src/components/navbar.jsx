import "bootstrap/dist/css/bootstrap.min.css";
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from 'react-redux';

const Navbar = () =>{

  const books = useSelector((c) => c.carts.books)


    return(
        <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/books" className="nav-link fs-4">Books</Link>
        </li>
         <li className="nav-item">
        <Link to="/carts" className="nav-link fs-4">carts</Link>
        </li>
      </ul>
      <ul className="navbar-nac">
      <li  className="nav-item">
        <a  className="nav-link text-danger">
        <FontAwesomeIcon style={{transform:'scale(2)'}} className="me-2 mt-3" icon={faShopify}/>{books.length}
        </a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        </>
    )

}

export default Navbar