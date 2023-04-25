import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    margin-top: 22px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 0.7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
`

const linkStyle = {
    textDecoration: 'none',
    color: "black"
}

function Navbar(nav) {

  return (
    <Container>
        <Wrapper>
            <Left>
                <Link style={linkStyle} to='/'>Начало</Link>
                <Link style={linkStyle} to='/packs'>Оферти</Link>
                <Link style={linkStyle} to='/about'>За нас</Link>
                <Link style={linkStyle} to='/news'>Новини</Link>
                <Link style={linkStyle} to='/contacts'>Контакти</Link>
            </Left>
        </Wrapper>
    </Container>
  )
}

export default Navbar