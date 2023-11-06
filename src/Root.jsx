import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 95vh;
  align-items: center;
  text-align: center;
`;
const Header = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 24px;
`;
const Body = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: center;
`;
const ContentBox = styled.div`
  background-color: green;
  width: 80%;
  height: 100%;
  border-radius: 20px;
`;
const Content = styled.div`
  color: white;
`;
const Footer = styled.div`
  height: 10%;
`;

const Root = () => {
  return (
    <Container>
      <Header>
        <Title>제목제목제목</Title>
      </Header>
      <Body>
        <ContentBox>
          <Content>내용내용내용</Content>
          <Content>내용내용내용</Content>
          <Content>내용내용내용</Content>
        </ContentBox>
      </Body>
      <Footer>푸터푸터푸터</Footer>
    </Container>
  );
};

export default Root;
