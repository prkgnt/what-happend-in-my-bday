import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const LoaderText = styled.div`
  font-family: "Gmarket";
  font-size: 18px;
  color: white;
`;

const Loader = ({ isFinished }) => {
  const [dots, setDots] = useState("");
  const interval = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
    }, 500);
    timer.current = setTimeout(() => {
      clearInterval(interval.current);
      clearTimeout(timer.current);
      isFinished();
    }, 4000);
    return () => {};
  }, []);

  return <LoaderText>검색 중{dots}</LoaderText>;
};

export default Loader;
