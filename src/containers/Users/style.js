import styled from "styled-components";
import Background from "../../assets/bg2.svg";

export const Container = styled.div`
  background: url(${Background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;


export const H1 = styled.h1`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
margin-top:50px;
margin-bottom:100px;
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

export const User = styled.li `
display: flex;
justify-content:space-around;
align-items: center ;
flex-direction:row;
width: 327px;
color: #FFFFFF;
height:48px;
outline: none;
margin-top:40px;
padding-left: 15px;

border:none;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
text-decoration:none;
list-style:none ;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 15px;

button{
  border: none;
  border-color: none ;
  background:none ;
  cursor: pointer;
&:active{
  transform: scale(1.2);
}
}
`

