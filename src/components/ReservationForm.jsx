import React, { useState } from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Modal = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  max-width: 500px;
  width: 90%;
`;

const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
`;

const Button = styled.button`
background-color: #4CAF50;
color: white;
padding: 10px 15px;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
    background-color: #45a049;
}
`;

function ReservationForm({ destination, price, date }) {
    const form = useRef()
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [reservationStatus, setReservationStatus] = useState('');
  
    const handleSubmit = async () => {
        console.log(fullName);
        setReservationStatus('Reservation successful!');


        emailjs.sendForm('service_hos0a6f', 'contact_form', form.current, 'hoIIze7MGQ62t1f3w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    const handleNameChange = (event) => {
        setFullName(event.target.value);
      };
    
      const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handleClose = () => {
        window.location.reload()
      };
  
    return (
      <div>
        <Modal>
            <ModalContent>
                <CloseButton onClick={handleClose}>&times;</CloseButton>
                {reservationStatus ? (
                    <div>
                        <p>Резервацията е успешна!</p>
                        <p>Повече информация и начин на плащане, ще получите на посочения имейл</p>
                        <Button onClick={() => window.location.reload()}>Продължи</Button>
                    </div>
                    ) : (
                        <>
                            <h2>Резервация за {destination}</h2>
                            <Form onSubmit={handleSubmit} ref={form}>
                                <input type="hidden" name='destination_place' value={destination}/>
                                <input type="hidden" name='price' value={price}/>
                                <input type="hidden" name='date' value={date}/>
                                <Label htmlFor="name">Вашите имена:</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="full_name"
                                    required
                                    onChange={handleNameChange}
                                />
                                <Label htmlFor="phoneNumber">Телефонен номер:</Label>
                                <Input
                                    type="tel"
                                    id="phone_number"
                                    name="phone_number"
                                    required
                                    onChange={handlePhoneNumberChange}
                                />
                                <Label htmlFor="email">Имейл:</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    onChange={handleEmailChange}
                                />
                                <Button>Резервирай</Button>
                            </Form>
                        </>
                    )
                }
            </ModalContent>
        </Modal>
    </div> 
    )
}
export default ReservationForm