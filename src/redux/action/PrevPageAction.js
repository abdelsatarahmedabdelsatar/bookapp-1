import axios from "axios";


export default function changePerviuos(page) {
  return (dispatch) => {
    axios
      .create({
        baseURL: page,
      })
      .get()
      .then((res) => {
        dispatch({ type: "SET_PREVIOUS_PAGE", value: res.data.previous});
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };
}
