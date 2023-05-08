import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



  const Price = styled.div`
    color: black;
  `
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 250px;
    min-width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `;
  
  const Image = styled.img`
    height: 75%;
    width: 100%;
    z-index: 2;
  `;

  const Unit = styled.div`
    max-width: 230px;
    margin-top: 3%;
    margin-bottom: 4vh;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    &:hover {
      transform: scale(1.1);
      transition-duration: 0.3s;
    }
  `;
  
  const ProductInfo = styled.div`
  flex: 1;
  margin: 5px;
  align-items: center;
  justify-content: center;
  position: relative;
  `

  const ItemName = styled.h6`
    font-weight: 600;
    font-size: 13px;
  `

function Packs() {
    const [packs, setPacks] = useState([])
    useEffect(() => {
      fetch('http://localhost:4000/packs')
        .then(response => response.json())
        .then(response => {
            setPacks(response)
        })
    }, [])

  return (
    <div>
        <Navbar />
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", width: "90%", marginLeft: "auto"}}>
            {packs.map(item =>
        <Unit>
                    <Link to={`/packs/${item._id}`}>
        <Container>
            <div />
            <Image src={item.image}/>
        </Container>
                    </Link>
        <ProductInfo>
            <ItemName>{item.destination}</ItemName>
            <p style ={{marginTop: "-5px", fontSize: "13px"}}>{item.numberOfPacks > 0 ? `налични места: ` + item.numberOfPacks : `не е наличен`}</p>
            <Price>{item.price} лв.</Price>
        </ProductInfo>
    </Unit>
            )}
        </div>
        <Footer />
    </div>
  )
}

export default Packs