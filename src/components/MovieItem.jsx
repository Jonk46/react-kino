import React from "react";

const MovieItem = props => {
  console.log(props);
  return (
    <div>
      <p>{props.movie.title}</p>
      <button onClick={props.removeMovie.bind(null, props.movie)}>
        Delete Movie
  </button>
    </div>
  );
};



export default MovieItem;