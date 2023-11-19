import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

import "../assets/Calendar.css";
import Loader from "../\bcomponents/Loader";

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

const DateInputModal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DateBox = styled.div`
  background-color: white;
  position: relative;
  width: 90%;
  height: 500px;
  border-radius: 20px;
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
`;
const DateText = styled.div`
  font-family: "Gmarket";
  margin-top: 5px;
`;
const DateBtn = styled(Btn)`
  transform: translate(0%);
`;
const InputName = styled.input`
  width: 50%;
  height: 15px;
  margin-right: 5px;
  text-align: center;
`;

const Root = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [realLoading, setRealLoading] = useState(true);
  const [dateValue, onChange] = useState(new Date());
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const nav = useNavigate();
  const isFinished = () => {
    setIsLoading(false);
  };
  const getData = async () => {
    const bDayText =
      dateValue.getMonth() + 1 + "월%20" + dateValue.getDate() + "일";
    console.log(bDayText);
    const url = `https://ko.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${bDayText}&format=json&formatversion=2`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.query.pages[0].extract);
        setData(data.query.pages[0].extract);
        setRealLoading(false);
      });
  };
  useEffect(() => {
    if (!isLoading & !realLoading) {
      nav("/results", { state: { bData: data } });
    }
  }, [isLoading, realLoading]);

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
            <Btn onClick={() => setIsOpen((prev) => !prev)}>
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
      {isOpen && (
        <DateInputModal>
          <DateBox disable={true}>
            <Calendar onChange={onChange} value={dateValue} />
            <br></br>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InputName
                placeholder="이름을 입력해주세요!"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <DateText>님의 생일인</DateText>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <DateText style={{ color: "#663333" }}>
                {dateValue.toLocaleDateString()}
              </DateText>
              <DateText>에는</DateText>
            </div>
            <DateText>무슨 일이 있었을까요?</DateText>
            <DateBtn
              onClick={() => {
                setIsLoading(true);
                setRealLoading(true);
                getData();
              }}
            >
              <BtnText>알아보러 가기</BtnText>
            </DateBtn>
          </DateBox>
          {isLoading && (
            <DateInputModal>
              <Loader isFinished={isFinished} />
            </DateInputModal>
          )}
        </DateInputModal>
      )}
    </Container>
  );
};

export default Root;
