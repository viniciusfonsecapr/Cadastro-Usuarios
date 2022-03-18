import styled from "styled-components";
import Background from "../../assets/bg1.svg";

export const Container = styled.div`
  background: url(${Background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 900px;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;


export const InputLabel = styled.label`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-left:60px;
margin-bottom:5px;
`;

export const Input = styled.input`
width: 316px;
color: #FFFFFF;
height:48px;
outline: none;
margin-left:36px;
margin-right:36px;
margin-bottom:56px;
padding-left:25px;
border:none;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;


`;




