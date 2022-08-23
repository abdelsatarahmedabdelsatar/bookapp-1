const INITIAL_STATE = {
    books: [],
  };
  
  export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_TO_CART":
        return {
            books: [...state.books, action.payload],
        };
      case "DEL_FROM_CART": 
      let arr = [...state.books]
      arr.splice(action.payload,1)
      return {
        books: [...arr],
        }
       
      default:
        return { ...state };
    }
  }
  