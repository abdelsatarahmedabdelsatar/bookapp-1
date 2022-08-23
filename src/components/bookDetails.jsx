import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeCart } from "../redux/action/addToCart";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const myParams = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://gutendex.com/books/${myParams.id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (book) => {
    dispatch(changeCart(book));

  }
  // backdrop_path
  return (
    <>
      <div
        style={{ padding: "70px" }}
        className="row container-fluid bg-secondary"
      >
        <div className="col-2"></div>
        <div
          className="card col-12 m-3 shadow p-3"
          style={{ backgroundColor: "#356" }}
        >
          <div className="card-body row">
            <div className="col-4">
              {book.formats && (
                <img
                  width={350}
                  src={book.formats["image/jpeg"]}
                  className="card"
                  style={{
                    border: "1.5px solid #111",
                    borderRadius: "3px",
                    boxShadow: '7px 7px #CCC'
                  }}
                />
              )}
            </div>
            <div className="col-4">
              <h5 className="card-title">{book.title}</h5>
              <p style={{ color: "#888" }}> {book.bookshelves} </p>
              <p className="card-text">
                <span className="text-primary">Downloads : </span>
                {book.download_count}
              </p>
              <p className="card-text">
                <span className="text-primary">languages : </span>
                {book.languages}
              </p>
              <h4>Subjects</h4>
              {book.subjects &&
                book.subjects.map((s, i) => {
                  return (
                    <h6 style={{ color: "#888" }} key={i}>
                      {s}
                    </h6>
                  );
                })}
              <h4>authors</h4>
              {book.authors &&
                book.authors.map((a, i) => {
                  return (
                    <div key={i}>
                      <h6>
                        Name : <span style={{ color: "#777" }}>{a.name}</span>
                      </h6>
                      <h6>
                        Birth year :{" "}
                        <span style={{ color: "#777" }}>{a.birth_year}</span>
                      </h6>
                      <h6>
                        Death year :{" "}
                        <span style={{ color: "#777" }}>{a.death_year}</span>
                      </h6>
                    </div>
                  );
                })}
              <button onClick={() => {addToCart(book)}} className="btn btn-danger me-2 mt-4">add to cart</button>
              <Link to="/books">
                <button className="btn btn-primary mt-4">back to hame</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
};

export default BookDetails;
