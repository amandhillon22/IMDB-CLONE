import { useEffect, useState } from "react";

//components
import Header from "../components/common/Header";
import Banner from "../components/Banner";

import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constant";
import { Box } from "@mui/material";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);

  return (
  <div>
    <Header />
    <Box>
      <Banner />
    </Box>
  </div>
  );
};
export default Home;
