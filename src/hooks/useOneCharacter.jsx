import React, { useEffect, useState } from "react";

const useOneCharacter = (id = 0) => {
  const [userData, setUserData] = useState({});
 
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => data.json())
      .then((data) => {     
        console.log("data", userData) 
          setUserData(data);    
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);
  return userData;
};
export default useOneCharacter;
