import axios from "axios";

export const HaberAction = () => {
  return (dispatch) => {
    try {
      axios
        .get("https://newsapi.org/v2/top-headlines/sources?apiKey=f73728e453b84f08b93e8e7262aa1d7f")
        .then((resp) => dispatch({ type: "GET_HABER", payload: resp.data }));
    } catch (error) {
    console.log(error,"haber çekilirken hata");
    }
  };
};











