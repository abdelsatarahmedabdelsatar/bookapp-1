import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import changeBooks from "./../redux/action/booksAction";
import changeNext from './../redux/action/NextPageAcion';
import changePerviuos from './../redux/action/PrevPageAction';

const Home = () => {
  const [myPage, setPage] = useState("http://gutendex.com/books/");

  const dispatch = useDispatch();
  const mybooks = useSelector((c) => c.books);
  const myNext = useSelector((c) => c.next);
  const myPreviuos = useSelector((c) => c.previuos);

  useEffect(() => {

    dispatch(changeBooks(myPage));
    dispatch(changeNext(myPage));
    dispatch(changePerviuos(myPage));
  }, [myPage]);

  const next = () => {
    
   setPage(myNext);
};
  const prev = () => {
    setPage(myPreviuos);
  };

  // backdrop_path
  return (
    <>
      <div
        style={{ paddingTop: "100px", paddingLeft: "30px" }}
        className="row container-fluid bg-secondary"
      >
        {mybooks.map((book, i) => {
                
          return (
            <div
             
              className=" col-2 m-5"
              key={i}
            >
              
                <Link
                  style={{ color: "blackred", textDecoration: "none" }}
                  to={`/books/${book.id}`}
                >
                <img
                src={`${book.formats["image/jpeg"]}`}
                className="card-img-top"
                style={{
                  border:' 5px solid #333',
                  borderRadius:'5px',
                  width:'250px',
                  height:'400px',
                  boxShadow: '5px 8px #FFF'
                }}
              />
                </Link>
              </div>
          );
        })}
        <div className="row container mt-3 ms-2 mb-5">
          <div className="col-5">
           
          </div>
          <div className="col-3">
          <button
              disabled={myPage == 1}
              onClick={() => prev()}
              className="btn btn-danger btn-lg"
            >
              {'<<'}
            </button>
            <button
              disabled={myPage == mybooks.length}
              onClick={({}) => next()}
              className="btn btn-primary btn-lg ms-5"
            >
              {'>>'}
            </button>
          </div>
          <div className="col-3">
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
