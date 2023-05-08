import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

  const Price = styled.div`
    color: black;
  `
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 250px;
    margin-top: 20px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #f5f5f7;
    
  `;
  
  const Image = styled.img`
    height: 200px;
    width: 300px;
    z-index: 2;
    margin-left: 20px
  `;

  const Unit = styled.div`
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  `;
  
  const ProductInfo = styled.div`
  flex: 1;
  margin: 5px;
  align-items: center;
  justify-content: center;
  position: relative;
  `

function News() {
    const [news, setNews] = useState([])
        useEffect(() => {
          fetch('http://localhost:4000/news')
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setNews(response)
            })
        }, [])
        

  return (
    <div>
        <Navbar />
    <Unit>
        {news.map((item) =>
        <div style={{display: "flex", flexDirection: "row", width: "90%", marginLeft: "auto", marginRight: "auto"}}>
        <Container>
            <Image src={item.image}/>
            <div style={{marginLeft: "5vw"}}>
                <p>{item.title}</p>
        <ProductInfo>
            <Price>{item.createdAt}</Price>
        </ProductInfo>
            </div>
        </Container>
</div>
            )}
    </Unit>
    <Footer />
    </div>
  )
}

export default News