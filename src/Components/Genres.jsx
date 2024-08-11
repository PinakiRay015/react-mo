import React from "react";
import { genres } from "../utils";
const Genres = ({slides}) => {
  return (
    <div className="genreBox px-4 py-3 flex flex-wrap gap-2">
      {genres.slice(0,slides).map((Element, id) => {
        return (
          <div
            key={id}
            className="g-box h-[15vh] flex items-center justify-center rounded-md cursor-pointer"
            style={{backgroundColor : Element.color }}
          >
            <p className="font-semibold text-lg text-white">{Element.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
