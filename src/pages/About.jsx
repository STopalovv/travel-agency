import React from 'react'
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { aboutUs, mission } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

function Slider() {

  return (
    <div>
    <Navbar />
    <Container>
      <Wrapper>
        {aboutUs.map((item) => (
          <Slide>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
    <Container>
    <Wrapper>
      {mission.map((item) => (
        <Slide>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Desc>{item.desc}</Desc>
            <Desc>{item.descTwo}</Desc>
          </InfoContainer>
        </Slide>
      ))}
    </Wrapper>
  </Container>
  <Footer />
  </div>
  )
}

export default Slider