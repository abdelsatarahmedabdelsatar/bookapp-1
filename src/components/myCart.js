import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch , useSelector } from 'react-redux';
// import  {DeleteFavorites}  from "../myStore/actions/delete";
import { DeleteCart } from './../redux/action/deleteFromCart';

const MyCart = () =>{

    const dispatch = useDispatch()
    const myBooks = useSelector(s => s.carts.books)

    const handleDelete = (i) => {
        dispatch(DeleteCart(i))
        console.log(myBooks)
    }

    return(
        <>
        <div className="row mt-5">
           
            <div className="col-3"></div>
            <div style={{border:"2px solid #555"}} className="col-6 shadow-lg p-5 mt-5 bg-secondary">
            <h3 style={{marginBottom:'30px'}}>my books cart : </h3>
          
            {myBooks.map((f , i) =>{
                return(
                    <div key={i} className="row">
                        <div className="col-3">
                        <img 
                                src={f.formats["image/jpeg"]}
                                className="card-img-top"
                                style={{
                                  border:' 3px solid #333',
                                  borderRadius:'5px',
                                  width:'70px',
                                  height:'95px',
                                  boxShadow: '3px 3px #FFF'
                                }}
                            />
                        </div>
                        <div className="col-9">
                            
                        <h3>{f.title}</h3>
                        <button onClick={() => {handleDelete(i)}} className="btn btn-danger btn-sm m-1">delete</button>
                        </div>
                    
                        <hr className="mt-4"/>

                    </div>
                    

                )
            })}
            
          
            
            </div>
            <div className="col-3"></div>
        </div>
       

        </>
    )

}

export default MyCart