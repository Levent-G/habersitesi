const HaberReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_HABER":
        return { ...state, haberData: action.payload };
   
  
      default:
        return state;
    }
  };
  
  export default HaberReducer;
  