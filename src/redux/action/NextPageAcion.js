import axios from "axios";


export default function changeNext(page) {
  return (dispatch) => {
    axios
      .create({
        baseURL: page,
      })
      .get()
      .then((res) => {
        dispatch({ type: "SET_NEXT_PAGE", value: res.data.next});
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };
}
