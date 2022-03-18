import styled from "styled-components";

export const Button = styled.button`
margin-top: 120px;
width: 342px;
height: 74px;
background:${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
border-radius: 14px;
border:${props => props.isBack ? '1px solid #FFFFFF;' : 'none'};
margin-left:36px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 28px;
display: flex;
align-items: center;
color: #FFFFFF;
padding-left:118px;
text-decoration: none;
img {
    transform: ${props => props.isBack ? 'rotateY(180deg)' : ''};
    margin-left:14px;
    margin-right: ${props => props.isBack ? '24px' : ''};
}

&:hover{
    cursor: pointer;
    opacity: 0.8; 
  }
&:active{
  opacity:0.5 ;
}
`;