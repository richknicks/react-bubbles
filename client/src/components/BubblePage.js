import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axiosWithAuth()
        .get("/api/colors")
        .then(response => {
          console.log(response.data);
          setColorList(response.data);
          setUpdate(false);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(
            `Error fetching colors, ${error.response}`
          );
          setIsLoading(false);
        });
    }, 2000);
  }, [update]);

  return (
    <>
     {update ? "LOADING" : ""}
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} update={setUpdate} />
    </>
  );
};

export default BubblePage;
