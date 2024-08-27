import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDes = ({ BASE_URL, API_KEY }) => {
  const params = useParams();
  const MovieId = params.id;

  const [getDetails, setGetDetails] = useState({});

  const getMovieDetails = async () => {
    try {
      const response = await fetch(`${BASE_URL}movie/${MovieId}?api_key=${API_KEY}`);
      const data = await response.json();
      console.log(data);

      setGetDetails(data);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [MovieId]);

  return (
    <div className="w-[100vw] pl-[10vw] h-screen">
      <div className="hero-section h-screen relative">
        <div className="background-section h-screen absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${getDetails.backdrop_path}`}
              alt={`Backdrop of ${getDetails.original_title}`}
            />
        </div>

        <div className="detail-section absolute bottom-0 w-full h-screen flex items-center">
          <div className="w-[80%] mx-auto p-1 flex gap-8">
            {getDetails.belongs_to_collection?.poster_path ? (
              <img
                className="w-64"
                src={`https://image.tmdb.org/t/p/original/${getDetails.belongs_to_collection.poster_path}`}
                alt={`Collection poster for ${getDetails.original_title}`}
              />
            ) : (
              <img
                className="w-64"
                src={`https://image.tmdb.org/t/p/original/${getDetails.poster_path}`}
                alt={`Poster of ${getDetails.original_title}`}
              />
            )}
          <div>
            <div className="flex items-center gap-5" >
              <p className="text-white font-semibold text-sm" >{`${getDetails.release_date}`.substring(0,4)}</p>
              <p className="text-white font-semibold text-sm">{getDetails.runtime} mins</p>
              <p className="text-white font-semibold text-sm">{getDetails.status}</p>
            </div>
            <h1 className="text-white font-black text-7xl" >{getDetails.original_title}</h1>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDes;
