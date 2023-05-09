import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';

const publicRequest = axios.create({
    baseURL: "http://localhost:4000/packs/"
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
    const [showForm, setShowForm] = useState(false)
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const getProduct = async () => {
                const res = await publicRequest.get(id);
                console.log(id)
                setPack(res.data)
            
        }
        getProduct()
    }, [id])

    const handleButtonClick = () => {
      setShowForm(true)
    }
    

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={pack.image} />
        </ImgContainer>
        <InfoContainer>
          <Desc>Дестинация: {pack.destination}</Desc>
          <Desc>Тръгване от: {pack.start}</Desc>
          <Desc>Дата на тръгване: { new Date(pack.startDate).getDay()}/{ new Date(pack.startDate).getMonth() + 1}/{ new Date(pack.startDate).getFullYear()}</Desc>
          <Desc>Дата на връщане: { new Date(pack.endDate).getDay()}/{ new Date(pack.endDate).getMonth() + 1}/{ new Date(pack.endDate).getFullYear()}</Desc>
          <Desc>Нощувки: {pack.stayingPlace}</Desc>
          <Price>{pack.price} лв.</Price>
          <AddContainer>
            <Button onClick={handleButtonClick}>Резервирай Място</Button>
            {showForm && <ReservationForm setShowForm={setShowForm} destination={pack.destination} price={pack.price} date={pack.startDate}/>}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default SinglePack