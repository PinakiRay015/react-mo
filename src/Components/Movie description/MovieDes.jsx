import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const MovieDes = ({ BASE_URL, API_KEY }) => {
  const params = useParams();

  const MovieId = params.id;

  const [getDetails, setGetDetails] = useState({});

  const getMovieDetails = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${MovieId}?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);

      setGetDetails(data);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="w-[100vw] pl-[10vw] h-screen">
      <div className="hero-section h-screen relative">
        <div className="background-section h-screen inset-0">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${getDetails.backdrop_path}`}
            alt=""
          />
        </div>

        <div className="detail-section absolute bottom-0 w-full h-screen flex items-center" >
          <div className="w-[80%] mx-auto p-1 flex" >
            {/* <img className="w-64" src={`https://image.tmdb.org/t/p/original/${getDetails.belongs_to_collection.poster_path}`} alt="" /> */}
            <img className="w-64" src={`https://image.tmdb.org/t/p/original/${getDetails.belongs_to_collection.poster_path}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDes;
