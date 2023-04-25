import React from 'react'
import styled from "styled-components";
// import emailjs from '@emailjs/browser';

const Container = styled.div`
    height: 70vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items:center;
`

const DescOne = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-top: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    margin-top: 20px;
`

const Form = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items:center;
`

const Input = styled.input`
    padding-left: 20px;
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 2px solid #ccc;
    margin-bottom: 10px;
`
const TextArea = styled.textarea`
    padding-left: 20px;
    width: 50%;
    height: 140px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 2px solid #ccc;
    margin-bottom: 10px;
    resize: none;
    font-size: 14px;
`

const Button = styled.input`
    margin-top: 10px;
    width: 15vw;
    height: 6vh;
    border: none;
    background-color: teal;
    color: white;
`


function Request() {
//     const form = useRef();

//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_wby5rwd', 'contact_form', form.current, 'uqkYqDf4DwqgJT62z')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });}
    return (
    <Container>
        <DescOne>Имате проблеми с използването на сайта или специално запитване?</DescOne>
        <Desc>Изпратете ни имейл и ние ще Ви отговорим при първа възможност!</Desc>
        <Form>
            <Input placeholder="Вашите имена" name='user_name' />
            <Input placeholder="Вашият имейл" name='user_email'/>
            <TextArea placeholder="Опишете с няколко думи вашето запитване" name='user_message'/>
            <Button type="submit" value="Изпрати" />
        </Form>
           
    </Container>
  )
}

export default Request