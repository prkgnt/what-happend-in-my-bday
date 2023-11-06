import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 100%;
  height: 750px;
  align-items: center;
  text-align: center;
`;
const Header = styled.div`
  display: flex;
  height: 10%;
  align-items: end;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-family: "Gmarket";
  font-weight: 500;
  margin-bottom: 10px;
  color: #519d9e;
`;
const Body = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: center;
`;
const ContentBox = styled.div`
  background-color: #9dc8c8;
  width: 80%;
  height: 100%;
  border-radius: 20px;
  position: relative;
`;
const ContentWrap = styled.div`
  padding: 30px 20px;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  font-family: "Gmarket";
  font-size: 22px;
`;
const ContentSmall = styled.div`
  font-family: "Gmarket";
  font-size: 13px;
  margin-bottom: 2px;
  color: #663300;
`;
const Btn = styled.button`
  position: absolute;
  bottom: 20px;
  transform: translate(-50%);
  cursor: pointer;
  border: none;
  width: 90%;
  height: 45px;
  border-radius: 10px;
  background-color: #336566;
  //margin: 30px 0px;
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.div`
  font-family: "Gmarket";
  color: white;
`;
const Footer = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
`;
const FooterBox = styled.div``;
const FooterText = styled.div`
  color: gray;
  font-size: 12px;
`;

const Root = () => {
  return (
    <Container>
      <Header>
        <Title>내 생일엔 무슨 일이?</Title>
      </Header>
      <Body>
        <ContentBox>
          <ContentWrap>
            <Content style={{ color: "white" }}>내가 태어난 날,</Content>
            <Content style={{ color: "white" }}>
              세계에는 어떤 일들이 일어났을까요?
            </Content>
            <br></br>
            <br></br>
            <ContentSmall style={{ color: "#663333", fontSize: "18px" }}>
              6월 27일
            </ContentSmall>
            <br></br>
            <ContentSmall
              style={{
                color: "#663333",
                marginBottom: "8px",
                fontSize: "15px",
              }}
            >
              💡사건💡
            </ContentSmall>

            <ContentSmall>
              678년 - 교황 아가토, 79대 로마 교황으로 취임했다
            </ContentSmall>
            <ContentSmall>
              2017년 - 롯데 자이언츠 가 역사적인 역전승 경기를 가져간 날이다.
            </ContentSmall>
            <ContentSmall>...</ContentSmall>
            <br></br>
            <ContentSmall
              style={{
                color: "#663333",
                marginBottom: "8px",
                fontSize: "15px",
              }}
            >
              💡탄생💡
            </ContentSmall>

            <ContentSmall>
              1462년 - 프랑스의 왕 루이 12세. (~1515년)
            </ContentSmall>
            <ContentSmall>1975년 - 미국의 배우 토비 매과이어</ContentSmall>
            <ContentSmall>...</ContentSmall>
            <br></br>
            <Content style={{ color: "white", fontSize: "18px" }}>
              지금 생일을 입력해서,
            </Content>
            <Content style={{ color: "white", fontSize: "18px" }}>
              무슨 일이 있었는지 알아봐요!
            </Content>
            <Btn>
              <BtnText>생일 입력하기</BtnText>
            </Btn>
          </ContentWrap>
        </ContentBox>
      </Body>
      <Footer>
        <FooterBox>
          <FooterText>Copyright 2023. prkgnt all rights reserved.</FooterText>
          <FooterText>문의사항: pgt258258@gmail.com</FooterText>
        </FooterBox>
      </Footer>
    </Container>
  );
};

export default Root;