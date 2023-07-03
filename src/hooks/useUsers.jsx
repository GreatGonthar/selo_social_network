import React, { useEffect, useState } from "react";

const useUsers = (page = 1) => {
  let [state, setState] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((data) => data.json())
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [page]);
  return state;
};
export default useUsers;
