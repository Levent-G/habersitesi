import { actionTypes } from "./actionTypes";

export const initialState = {
  countryName: "tr",
  haberler: [],
};

const haberReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COUNTRY_NAME:
      return { ...state, countryName: action.payload };

    case actionTypes.SET_NEWS:
      return { ...state, haberler: action.payload };

    default:
      return state;
  }
};

export default haberReducer;
