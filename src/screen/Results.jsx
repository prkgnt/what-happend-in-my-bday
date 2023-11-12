import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: block;
  width: 100%;
`;

const ContentBox = styled.div`
  margin-top: 20px;
  padding: 20px 20px;
  border: 1px solid #9dc8c8;
  border-radius: 10px;
`;
const ContentText = styled.div`
  font-family: "Gmarket";
`;
const HeaderText = styled.div`
  margin-top: 20px;
  font-family: "Gmarket";
  font-size: 25px;
  color: #519d9e;
  width: 100%;
  text-align: center;
`;

const Results = () => {
  const { state } = useLocation();
  //console.log(state);
  return (
    <Container>
      <HeaderText>당신의 생일엔 이런 일들이 일어났어요!</HeaderText>
      <HeaderText style={{ color: "#663300", fontSize: "15px" }}>
        재미있는 사건이 있는지 찾아보세요!
      </HeaderText>
      <ContentBox>
        <ContentText dangerouslySetInnerHTML={{ __html: state.bData }} />
        <ContentText style={{ fontSize: "10px" }}>출처: 위키피디아</ContentText>
      </ContentBox>
    </Container>
  );
};

export default Results;
