import React from 'react'
import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 6vw;
  `;
  
  const Center = styled.div`
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 100%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;

function Footer() {
  return (
    <Container>
        <Left>
          <Title>Услуги</Title>
          <List>
            <ListItem>Проверка на пратката</ListItem>
            <ListItem>30 дни право на връщане</ListItem>
            <ListItem>Гаранция и сервиз</ListItem>
          </List>
        </Left>
        <Center>
          <Title>Поръчки и доставка</Title>
          <List>
            <ListItem>Как да поръчам онлайн</ListItem>
            <ListItem>Доставка на поръчките</ListItem>
            <ListItem>Блог</ListItem>
          </List>
          </Center>
          <Center>
          
        </Center>
        <Right>
        <Title>Връзка с нас</Title>
          <List>
            <ListItem>Формуляр поправка на продукт</ListItem>
            <ListItem>Формуляр връщане на продукт</ListItem>
            <ListItem>Формуляр въпроси и рекламации</ListItem>
          </List>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
  )
}

export default Footer