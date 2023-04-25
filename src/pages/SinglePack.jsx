import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const publicRequest = axios.create({
    baseURL: "https://643bebbd4477945573633041.mockapi.io/news/packs"
}) 

const Container = styled.div``;

  const Wrapper = styled.div`
    padding: 50px;
    display: flex;
  `;
  
  const ImgContainer = styled.div`
    flex: 1;
  `;
  
  const Image = styled.img`
    width: 90%;
    height: 80vh;
    object-fit: cover;
  `;
  
  const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
  `;
   
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
  `;
  
  const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  
  const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
  
    &:hover {
      background-color: #f8f4f4;
    }
  `;


function SinglePack() {
    const [pack, setPack] = useState({})
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const getProduct = async () => {
                const res = await publicRequest.get(id);
                console.log('here')
                setPack(res.data)
            
        }
        getProduct()
    }, [id])
    

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={pack.image} />
        </ImgContainer>
        <InfoContainer>
          <Desc>{pack.destination}</Desc>
          <Desc>{pack.start}</Desc>
          <Desc>{pack.startDate}</Desc>
          <Desc>{pack.endDate}</Desc>
          <Desc>{pack.stayingPlace}</Desc>
          <Desc>{pack.activities}</Desc>
          <Price>{pack.price} лв.</Price>
          <AddContainer>
            <Button>Резервирай Място</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default SinglePack