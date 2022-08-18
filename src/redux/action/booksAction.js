import axios from "axios";


export default function changeBooks(page) {
  return (dispatch) => {
    axios
      .create({
        baseURL: page,
      })
      .get()
      .then((res) => {
        dispatch({ type: "SET_BOOKS", value: res.data.results});
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };
}
