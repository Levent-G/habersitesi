import { Container } from '@mui/material'
import React, { useEffect,useState} from "react";
import UlkeSecimiComp from '../components/UlkeSecimiComp'
import HaberlerComp from '../components/HaberlerComp'
import { useSelector, useDispatch } from "react-redux";
import { HaberAction } from "../redux/actions/HaberAction";
import YeniHaberMenu from "../layouts/YeniHaberMenu";
const Home = () => {
  const state = useSelector((state) => state.haberData);
  const dispatch = useDispatch();
  const [countryName,setCountryName] = useState("tr");

  useEffect(() => { 
    dispatch(HaberAction(countryName));  
  }, [countryName,dispatch]);


  return (
    <div>
      <YeniHaberMenu data={state.haberData} countryName={countryName}/>
      <Container className="flex justify-center items-center ">
        <UlkeSecimiComp
          setCountryName={setCountryName}
          countryName={countryName}
        />
        <HaberlerComp data={state.haberData} countryName={countryName} />
      </Container>
    </div>
  );
}

export default Home