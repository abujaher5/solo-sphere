import { useLoaderData } from "react-router-dom";
import Carosel from "../../components/Carosel";
import TabCategories from "../../components/TabCategories";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <Carosel></Carosel>
      <TabCategories jobs={jobs}></TabCategories>
    </div>
  );
};

export default Home;
