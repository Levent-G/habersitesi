import UlkeSecimiComp from "../components/UlkeSecimiComp";
import HaberlerComp from "../components/HaberlerComp";
import YeniHaberMenu from "../layouts/YeniHaberMenu";
const Home = () => {
  return (
    <>
      <YeniHaberMenu />
      <UlkeSecimiComp />
      <HaberlerComp />
    </>
  );
};

export default Home;
