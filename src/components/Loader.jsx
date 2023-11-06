import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LoaderText = styled.div`
  font-family: "Gmarket";
  font-size: 18px;
  color: white;
`;

const Loader = ({ isFinished }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
    }, 500);

    const timer = setTimeout(() => {
      clearInterval(interval);
      clearTimeout(timer);
      isFinished();
    }, 4000);
  }, []);

  return <LoaderText>검색 중{dots}</LoaderText>;
};

export default Loader;
