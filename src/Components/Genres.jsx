import React, { useEffect, useState } from "react";

const Genres = ({ BASE_URL, API_KEY }) => {
  const [genre, setGenre] = useState([]);

  const getGenre = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
      );
      const data = await response.json();
      setGenre(data.genres);
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  useEffect(() => {
    getGenre();
  }, []);

  return (
    <div className="genreBox px-4 py-3 flex flex-wrap gap-2">
        {genre.map((Element , id)=>{
            return(
                <div
                key={id}
                className="g-box h-[15vh] bg-indigo-950 flex items-center justify-center rounded-md"
              >
                <p className="font-semibold text-lg text-white" >{Element.name}</p>
              </div>
            )
        })}
    </div>
  );
};

export default Genres;
